import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { API, graphqlOperation } from 'aws-amplify';
import { listExpenses } from '../../src/graphql/queries';
import { SelectList } from 'react-native-dropdown-select-list';
import { useFocusEffect } from '@react-navigation/native';
import SignOutButton from '../../Components/SignOut';

const optionsPerPage = [5,10];

const HomeScreen = ({navigation}) => {
    const [expensesByCategory, setExpensesByCategory] = useState([]);
    const [page, setPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
    const [selectedMonth, setSelectedMonth] = useState((new Date()).getMonth());
    const months = [
        {key: 1 , value: 'Ιανουάριος'}
        ,{key: 2 , value: 'Φεβρουάριος'}
        ,{key: 3 , value: 'Μάρτιος'}
        ,{key: 4 , value: 'Απρίλιος'}
        ,{key: 5 , value: 'Μάιος'}
        ,{key: 6 , value: 'Ιούνιος'} 
        ,{key: 7 , value: 'Ιούλιος'}
        ,{key: 8 , value: 'Αύγουστος'}
        ,{key: 9 , value: 'Σεπτέμβριος'}
        ,{key: 10 , value: 'Οκτώβριος'}
        ,{key: 11 , value: 'Νοέμβριος'}
        ,{key: 12 , value: 'Δεκέμβριος'}
    ]

    const addHours = async (date, hours) => {
        date.setHours(date.getHours() + hours);
        return date;
    }
    
useFocusEffect(
    React.useCallback(() => {
      const fetchExpensesByCategory = async () => {
        try {
          // Get the current month's start and end dates

          const currentDate = new Date();
          const startDate = await addHours(new Date(currentDate.getFullYear(), selectedMonth - 1, 1), 3);
          const endDate = await addHours(new Date(currentDate.getFullYear(), selectedMonth, 0), 3);
          
          // Fetch expenses for the current month
          const response = await API.graphql(graphqlOperation(listExpenses, {
            filter: {
              Date: {
                between: [startDate.toISOString(), endDate.toISOString()],
              },
            },
          }));
  
          const expenses = response.data.listExpenses.items;
  
          // Group expenses by category and calculate the sum of values
          const expensesByCategory = expenses.reduce((acc, expense) => {
            const categoryID = expense.categoryID;
            const categoryName = expense.category.name;
            const value = expense.Value;
  
            if (!acc[categoryID]) {
              acc[categoryID] = {
                categoryName,
                sum: value,
              };
            } else {
              acc[categoryID].sum += value;
            }
  
            return acc;
          }, {});
  
          // Convert the grouped expenses into an array
          const expensesArray = Object.values(expensesByCategory);
  
          setExpensesByCategory(expensesArray);
          setNumberOfPages(Math.ceil(expensesArray.length/itemsPerPage));
        } catch (error) {
          console.error('Error fetching expenses:', error);
        }
      };  
      fetchExpensesByCategory();

    }, [selectedMonth])
);

    useEffect(() => {
        setPage(0);
    },[itemsPerPage])
  
    return (
      <View 
      style={styles.container}
      >
        <SelectList
        save='key'
        data={months}
        onSelect={() => console.log(selectedMonth)}
        placeholder={'Μήνας'}
        selected ={selectedMonth}
        setSelected={setSelectedMonth}
        // boxStyles= {[styles.category, {width: windowWidth*0.85}]}
        />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Category</DataTable.Title>
            <DataTable.Title>Sum</DataTable.Title>
          </DataTable.Header>
  
          {expensesByCategory.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.categoryName}</DataTable.Cell>
              <DataTable.Cell>{item.sum.toFixed(2)} €</DataTable.Cell>
            </DataTable.Row>
          ))}
        <DataTable.Pagination
            page={page}
            numberOfPages={numberOfPages}
            onPageChange={(page) => setPage(page)}
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={'Rows per page'}
      />
        </DataTable>
        <Button
            mode='contained'
            onPress={()=>navigation.navigate('HomePage')}>
            Νέα Πληρωμή
        </Button>
        <SignOutButton/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });

export default HomeScreen;
