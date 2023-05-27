import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { API, graphqlOperation } from 'aws-amplify';
import { listExpenses } from '../../src/graphql/queries';

const HomeScreen = ({navigation}) => {
    const [expensesByCategory, setExpensesByCategory] = useState([]);

    useEffect(() => {
      const fetchExpensesByCategory = async () => {
        try {
          // Get the current month's start and end dates
          const currentDate = new Date();
          const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
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
            const categoryName = expense.categoryID.name;
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
        } catch (error) {
          console.error('Error fetching expenses:', error);
        }
      };
  
      fetchExpensesByCategory();
    }, []);
  
    return (
      <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Category</DataTable.Title>
            <DataTable.Title>Sum</DataTable.Title>
          </DataTable.Header>
  
          {expensesByCategory.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.categoryName}</DataTable.Cell>
              <DataTable.Cell>${item.sum.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <Button
        onPress={()=>navigation.navigate('HomePage')}>
            Create Expense
        </Button>
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