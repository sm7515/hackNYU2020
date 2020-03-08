import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function Header() {
  const name = "Jane Doe";
  const date = new Date().getDate();
  const month = "March";

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 23 }}>
        {name}
      </Text>
      <Text style={{ fontSize: 20, lineHeight: 23 }}>
        {date}
        {"  "}
        {month}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
