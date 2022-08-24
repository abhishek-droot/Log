/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import RegistrationScreen from './src/views/screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/views/screens/LoginScreen';
import HomeScreen from './src/views/screens/HomeSceen';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import { StackActions } from 'react-navigation';
import RadioButton from './src/views/components/RadioButton';
import Slider from './src/views/components/Slider';
import SearchScreen from './src/views/screens/SearchScreen';





const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
   
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headershown: false}}>
                  <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}  options={{headerShown: false}}/>
                  <Stack.Screen name="Registration" component={RegistrationScreen} />
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="Search" component={SearchScreen} />
                  <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
                 </Stack.Navigator> 
          </NavigationContainer>
        
         
         
                
      )
};





export default App;
