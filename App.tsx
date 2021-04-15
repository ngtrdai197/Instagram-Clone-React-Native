import 'reflect-metadata';
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import CustomNavigationContainer from './navigation';

const client = new ApolloClient({
  uri: 'https://api-instagram-clone.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <ApolloProvider client={client}>
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
