import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BasicChart from "./components/basic";
// import CategoriesChart from './components/categories';
// import DynamicChart from './components/dynamic';
// import LinearGradientBackground from "./components/background";

export default function App() {
  return (
    <View style={styles.container}>
      <BasicChart />
      {/* <CategoriesChart /> */}
      {/* <DynamicChart /> */}
      {/* <LinearGradientBackground /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
