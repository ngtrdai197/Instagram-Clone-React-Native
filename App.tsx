import 'reflect-metadata';
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import CustomNavigationContainer from './src/navigation';
import { apolloClient } from './src/apollo';

export default class App extends React.Component {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <ApolloProvider client={apolloClient}>
          <CustomNavigationContainer />
        </ApolloProvider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
