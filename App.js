// Imports
import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from './components/Restaurants';
import Menu from './components/Menu';


// Create the stack navigator
const Stack = createStackNavigator();



// Main app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Restaurants' component={Restaurants} />
        <Stack.Screen name='Menu' component={Menu} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

