import React from "react";
import "reflect-metadata";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import AppContainer from "./navigation/root-stack.navigate";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
});
