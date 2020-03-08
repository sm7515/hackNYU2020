import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from "react-native";

export default function TodayData({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, lineHeight: 21, marginBottom: 20 }}>
          Today
        </Text>
        <TouchableOpacity onPress={() => handlePress()}>
          <Ionicons name="ios-add-circle" size={41} color="#9C9C9C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
