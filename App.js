import { StyleSheet, Text, View, Button } from 'react-native';
import {Amplify} from "@aws-amplify/core";
import {
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import awsmobile from './src/aws-exports';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/Home/HomePage';
import HomeScreen from './pages/HomeScreen/HomeScreen';

Amplify.configure(awsmobile);



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
