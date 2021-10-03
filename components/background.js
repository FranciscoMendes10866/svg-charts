import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const LinearGradientBackground = () => {
  const height = 300;
  const width = 300;
  return (
    <Svg height={height} width={width} style={styles.container}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={"#f3e7e9"} stopOpacity="1" />
          <Stop offset="1" stopColor={"#e3eeff"} stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      <Rect height={height} width={width} fill="url(#grad)" />
    </Svg>
  );
};

export default LinearGradientBackground;

const styles = StyleSheet.create({
  container: {
      zIndex: -1,
    position: "absolute",
  },
});
