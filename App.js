import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import BookDetailScreen from './src/screens/main/BookDetailScreen';
import AppNavigator from './src/AppNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return <AppNavigator />;
  
}