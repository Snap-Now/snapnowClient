import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Footer from './src/components/Footer';

const App = () => {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
