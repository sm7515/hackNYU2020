import React, { useState, useEffect, createRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function result({ navigation, route }) {
  const { photo } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: photo,
          isStatic: true
        }}
      />
    </View>
  );
}
