import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import { Dimensions } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { getCategory, listCategories } from '../../src/graphql/queries';
import { createExpense } from '../../src/graphql/mutations';
import {
    useAuthenticator,
  } from '@aws-amplify/ui-react-native';

const HomePage = () => {

    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [loadingAPI, setLoadingAPI] = useState(false);
    const [categoriesOptions, setCategoriesOptions] = useState([]);

    const windowWidth = Dimensions.get('window').width;
    const options = [];

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      
    

    const createData = async () => {
        let data = {}
        data.Description = description; 
        data.categoryID = selectedOption; 
        data.Value = parseFloat(cost);
        data.Date = formatDate(new Date());
        
        return data;
    }

  
    const handleSubmit = async () => {
        setLoadingAPI(true);
        const new_data = await createData();
        console.log(new_data);
        try{
            const response = await API.graphql({
                query: createExpense,
                variables: {input: new_data}
            });

        } catch(e){
            console.log(e);
        }


        setLoadingAPI(false);
    };
    function SignOutButton() {
        const { signOut } = useAuthenticator();
        return <Button onPress={signOut} title="Sign Out" >signOut</Button>;
      }

    useEffect(() => {
        let options = [];
        const fetchCategories = async () => {
            const categories = await API.graphql({
                query: listCategories
            });
            console.log(categories.data.listCategories.items);
            categories.data.listCategories.items.map((cat) => {
                options.push({value: cat.name, key: cat.id});
            });
            return options
        };
        fetchCategories().then((res)=> setCategoriesOptions(res));
    },[])
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Νέα Πληρωμή</Text>
        </View>
        
        
        <SelectList
        save='key'
        data={categoriesOptions}
        placeholder={'Κατηγορία'}
        selected ={selectedOption}
        onSelect={console.log(selectedOption)}
        setSelected={setSelectedOption}
        boxStyles= {[styles.category, {width: windowWidth*0.85}]}
        />
        <View style={styles.valueContainer}>
        <TextInput
          label="Ποσό"
          value={cost}
          keyboardType="numeric"
          onChangeText={text => setCost(text)}
          style={styles.value}
          mode='outlined'
        />
        </View>
        <View style={styles.descriptionContainer}>
        <TextInput
          label="Περιγραφή"
          value={description}
          multiline
          onChangeText={text => setDescription(text)}
          style={styles.description}
          mode='outlined'
          numberOfLines={8}
          
        />
        </View>
        <Button 
        mode= 'contained' 
        onPress={handleSubmit} 
        style = {styles.button}
        loading= {loadingAPI}
            >Δημιουργία Πληρωμής
        </Button>
        <SignOutButton/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    descriptionContainer:{
        width: '100%',
        padding: 10,
    },
    description: {
        color: 'black',
        width: '100%',
    },
    value: {
        color: 'black',
        width: '100%',
    },
    valueContainer: {
        width: '100%',
        padding: 10,
    },
    category: {
        padding: 10,
        backgroundColor: 'white',
    },
    header: {
        height:'20%'
    },  
    headerText: {
        fontSize: 25,
    },
    button: {
        padding: 10,
        width: '100%'
    }
  });
export default HomePage

