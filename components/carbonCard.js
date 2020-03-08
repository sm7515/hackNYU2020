import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function CarbonCard() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width: 340,
    height: 150,
    borderRadius: 5
  }
});
