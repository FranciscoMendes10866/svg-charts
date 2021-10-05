import React from "react";
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const LinearGradientBackground = () => {
  const { height, width } = Dimensions.get("screen");
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Svg height={height} width={width} style={styles.wrapper}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#96fbc4" stopOpacity="1" />
            <Stop offset="1" stopColor="#f9f586" stopOpacity="0.6" />
          </LinearGradient>
        </Defs>
        <Rect height={height} width={width} fill="url(#grad)" />
      </Svg>
    </>
  );
};

export default LinearGradientBackground;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: -1,
    position: "absolute",
  },
});
