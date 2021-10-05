import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const DynamicChart = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const total = 9;
  const expired = 2;
  const nonExpired = 7;

  const data = [];

  for (let i = 1; i <= expired; i++) {
    data.push({
      color: "#A6B1E1",
    });
  }

  for (let i = 1; i <= nonExpired; i++) {
    data.push({ color: "#424874" });
  }

  const percentage = (1 / total) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  const angle = (1 / total) * 360;
  const sliceSpacing = total === 1 ? 0 : 4;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="160" width="160" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            {data.map((element, index) => (
              <Circle
                key={index}
                cx="50%"
                cy="50%"
                r={radius}
                stroke={element.color}
                fill="transparent"
                strokeWidth="40"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset + sliceSpacing}
                rotation={angle * index}
                originX="90"
                originY="90"
              />
            ))}
          </G>
        </Svg>
        <Text style={styles.label}>{total}</Text>
      </View>
    </View>
  );
};

export default DynamicChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    color: "#082032",
  },
});
