import React from 'react';
import 'reflect-metadata';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CustomNavigationContainer from './navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomNavigationContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
