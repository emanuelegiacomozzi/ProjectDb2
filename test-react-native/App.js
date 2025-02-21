import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Voli from './components/Voli';
import Compagnie from './components/Compagnie';
import Aeroporti from './components/Aeroporti';
import Header from './components/Header';
import Navbar from './components/Navbar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Navbar />
      <Stack.Navigator>
        <Stack.Screen name="Voli" component={Voli} />
        <Stack.Screen name="Compagnie" component={Compagnie} />
        <Stack.Screen name="Aeroporti" component={Aeroporti} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
