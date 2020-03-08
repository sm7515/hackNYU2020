import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import CarbonCard from "./carbonCard";

export default function DailyCarbon() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, lineHeight: 21, marginBottom: 20 }}>
        Daily Emission
      </Text>
      <CarbonCard />
      <CarbonCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingTop: 11,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  }
});
