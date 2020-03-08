import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text>footer</Text>
      <Text>footer</Text>
      <Text>footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 66,
    position: "absolute",
    bottom: 0,
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#9C9C9C"
  }
});
