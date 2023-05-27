/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SearchBar from './src/app/shared/components/searchBar';

const App = () => {
  console.log('first console log in AwesomeProject!');

  return (
    <SafeAreaView style={styles.Container}>
      <Text>New AwesomeProject</Text>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
});

export default App;
