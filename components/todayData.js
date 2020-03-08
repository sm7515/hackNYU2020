import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

export default function TodayData({ navigation, image }) {
  const handlePress = () => {
    navigation.navigate("Camera");
  };

  if (image === undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              marginBottom: 20,
              fontWeight: "bold"
            }}
          >
            Today
          </Text>
        </View>
        <View
          style={{
            height: 177,
            borderRadius: 7,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column"
          }}
        >
          <TouchableOpacity
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.15,
              backgroundColor: "white",
              borderRadius: 50,
              width: 60,
              height: 60,
              alignItems: "center"
            }}
            onPress={() => handlePress()}
          >
            <Ionicons name="ios-add" size={60} color="#A5A1A1" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, lineHeight: 18 }}>
            Start your <Text style={{ fontWeight: "bold" }}>FoodPrint</Text>{" "}
            with us!
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 21,
              marginBottom: 20,
              fontWeight: "bold"
            }}
          >
            Today
          </Text>
          <TouchableOpacity
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.15,
              backgroundColor: "white",
              borderRadius: 50,
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 11
            }}
            onPress={() => handlePress()}
          >
            <Ionicons
              name="ios-add"
              size={36}
              color="#A5A1A1"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 177,
            borderRadius: 7,
            backgroundColor: "white",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "column",
            paddingLeft: 13,
            paddingTop: 13,
            paddingBottom: 20
          }}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 16,
              fontWeight: "bold",
              color: "#565353",
              marginBottom: 13
            }}
          >
            12:00 Hamburger
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%"
            }}
          >
            <Image
              style={{ width: 131, height: 120, marginRight: 14 }}
              source={{
                uri: image[0]
              }}
            />
          </View>
        </View>
      </View>
    );
  }
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
