import React, { useState, useCallback, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FoodCard({ foodName }) {
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [foods, setFoods] = useState(foodName);

  const addNum = i => {
    console.log(foods);
    foods[i].number += 1;
    setFoods(foods);
    forceUpdate();
  };

  const minus = i => {
    foods[i].number -= 1;
    setFoods(foods);
    forceUpdate();
  };

  return (
    <View style={styles.cards}>
      {foodName.map((ele, i) => {
        return (
          <View style={styles.cardItem} key={i}>
            <View>
              <Text style={{ fontSize: 14, lineHeight: 16 }}>{ele.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="minus" onPress={() => minus(i)} />
              </TouchableOpacity>
              <View
                style={{
                  width: 41,
                  height: 41,
                  backgroundColor: "#E5E5E5",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 7,
                  marginRight: 7
                }}
              >
                <Text style={{ alignSelf: "center" }}>
                  {foods[i] ? foods[i].number : ele.number}
                </Text>
              </View>
              <TouchableOpacity onPress={() => addNum(i)}>
                <MaterialCommunityIcons name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    flex: 0.25,
    width: "100%",
    flexDirection: "column"
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingBottom: 7,
    paddingTop: 7,
    paddingLeft: 13,
    paddingRight: 13,
    borderRadius: 6,
    marginBottom: 11
  }
});
