import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Footer({ screen }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: "#FC8685"
        }}
      ></View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: "#9C9C9C"
        }}
      ></View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: "#9C9C9C"
        }}
      ></View>
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
    backgroundColor: "white"
  }
});
