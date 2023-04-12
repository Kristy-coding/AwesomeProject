/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {
 console.log('first console log in AwesomeProject!')

  return (
    <SafeAreaView style={styles.Container}>
        <View>
          <Text>New AwesomeProject</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
