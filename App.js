import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import MainScreen from './MainScreen'; // The screen with job details and buttons

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen} 
          options={{ title: 'Create Account' }} 
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ title: 'Main Screen' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
