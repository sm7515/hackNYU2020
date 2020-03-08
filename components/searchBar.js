import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodCard from "./foodCard";
import CarbonInfo from "./carbonInfo";
import { setDetectionImagesAsync } from "expo/build/AR";

const { height } = Dimensions.get("window");
let scrollEnabled = false;
export default function SearchBar({ navigation, data, setdone }) {
  const [show, setShow] = useState(true);
  const [foodCards, setFoodCards] = useState([]);

  const handlePress = () => {
    navigation.navigate("Search");
  };

  const addToCard = name => {
    console.log(name);
    const newarr = [...foodCards, { name: name, number: 1 }];
    setdone(true);
    setFoodCards(newarr);
  };

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {}, [show]);

  useEffect(() => {}, [foodCards]);

  return (
    <ScrollView style={{ flex: 1, flexGrow: 1 }} scrollEnabled={true}>
      <View style={styles.container}>
        {foodCards.length !== 0 && <FoodCard foodName={foodCards}></FoodCard>}
        <View style={show ? styles.suggestionShow : styles.suggestionHide}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 23
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 16,
                marginBottom: 10
              }}
            >
              Select food in this picture:
            </Text>
            {show ? (
              <TouchableOpacity
                onPress={() => {
                  handleShow();
                }}
              >
                <Ionicons name="ios-arrow-down" size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleShow();
                }}
              >
                <Ionicons name="ios-arrow-up" size={20} />
              </TouchableOpacity>
            )}
          </View>
          {show &&
            data.map(ele => {
              return ele.suggestion.map((el, i) => {
                return (
                  <View key={i} style={styles.item}>
                    <TouchableOpacity onPress={() => addToCard(el)}>
                      <Text
                        style={
                          el === "Burger" || el === "French Fries"
                            ? {
                                color: "black",
                                fontSize: 14,
                                lineHeight: 16
                              }
                            : {
                                fontSize: 14,
                                lineHeight: 16,
                                color: "#939393"
                              }
                        }
                      >
                        {el}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              });
            })}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Ionicons name="ios-search" size={20} color="#939393" />
          <Text style={{ paddingLeft: 90, color: "#939393" }}>Search More</Text>
        </TouchableOpacity>
        {foodCards.length !== 0 && <CarbonInfo data={data}></CarbonInfo>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 12,
    flexWrap: "wrap"
  },
  suggestionShow: {
    flex: 0.6,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: 6,
    paddingTop: 12,
    paddingLeft: 18,
    paddingBottom: 11,
    justifyContent: "flex-start"
  },
  suggestionHide: {
    flex: 0.1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: 6,
    paddingTop: 12,
    paddingLeft: 18,
    justifyContent: "flex-start"
  },
  item: {
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 11,
    marginRight: 23
  },
  button: {
    flex: 0.1,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
    marginTop: 16
  }
});
