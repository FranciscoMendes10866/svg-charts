import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

// import BasicChart from "./components/basic";
// import CategoriesChart from './components/categories';
// import DynamicChart from './components/dynamic';
// import LinearGradientBackground from "./components/background";
import DashLine from "./components/dash";

export default function App() {
  return (
    <View style={[styles.container, styles.dashBG]}>
      <StatusBar barStyle="light-content" />
      {/* <BasicChart /> */}
      {/* <CategoriesChart /> */}
      {/* <DynamicChart /> */}
      {/* <LinearGradientBackground /> */}
      <DashLine />
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
  dashBG: {
    backgroundColor: "#282846",
  },
});
