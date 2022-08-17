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
import { StackActions } from 'react-navigation';

// const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
      <View style={{backgroundColor:'white',flex:1}}>
          {/* <NavigationContainer>
              <Stack.Navigator screenOptions={{headershown: false}}>
                <Stack.Screen 
                  name="RegistrationScreen"
                  component={RegistrationScreen}
                  />
                  {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                {/* </Stack.Navigator> 
          </NavigationContainer> */}
            <RegistrationScreen />
          </View>    
      
  )
};





export default App;
