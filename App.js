import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
