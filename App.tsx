import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Footer />
    </NavigationContainer>
  );
};

export default App;
