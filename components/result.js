import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./searchBar";
import data from "./data";
import Footer from "./footer";

export default function result({ navigation, route }) {
  const { photo } = route.params;

  return (
    <View style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }}>
      {/** go back */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Ionicons name="ios-arrow-round-back" size={36} color="black" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: `data:image/gif;base64,${photo}`
        }}
      />
      <SearchBar navigation={navigation} data={data} style={{ flex: 0.2 }} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    marginBottom: 40,
    marginLeft: 30,
    position: "absolute",
    top: 46
  },
  image: {
    marginTop: 100,
    flex: 0.7,
    width: 350,
    height: 428,
    alignSelf: "center",
    borderRadius: 6,
    marginBottom: 16
  }
});
