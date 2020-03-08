import React, { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import * as Font from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  const name = "FoodPrint";
  const date = new Date().getDate();
  const month = "March";

  // useEffect(() => {
  //   Font.loadAsync({
  //     "roboto-bold": require("./../assets/fonts/Roboto-Bold.ttf"),
  //     "roboto-light": require("./../assets/fonts/Roboto-Light.ttf"),
  //     "roboto-regular": require("./../assets/fonts/Roboto-Regular.ttf")
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "200",
          fontSize: 30,
          lineHeight: 35
          // fontFamily: "roboto-regular"
        }}
      >
        {name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        <MaterialCommunityIcons
          name="less-than"
          size={18}
          style={{ marginRight: 15 }}
        />
        <MaterialCommunityIcons
          name="calendar-today"
          size={18}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 15, lineHeight: 18, fontWeight: "300" }}>
          {date} {month}
        </Text>
        <MaterialCommunityIcons
          name="greater-than"
          size={18}
          style={{ marginLeft: 15 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
