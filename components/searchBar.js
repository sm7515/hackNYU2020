import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ navigation, data }) {
  const [show, setShow] = useState(true);

  const handlePress = () => {
    navigation.navigate("Search");
  };

  const handleHide = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.suggestion}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: 16,
            marginBottom: 10,
            width: Dimensions.get("window").width
          }}
        >
          Select food in this picture:
        </Text>
        {show ? (
          <TouchableOpacity
            onPress={() => {
              handleHide();
            }}
          >
            <Text>hide</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleShow();
            }}
          >
            <Text>show</Text>
          </TouchableOpacity>
        )}
        {data.map(ele => {
          return ele.suggestion.map((item, i) => {
            return (
              <View key={i} style={styles.item}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 14, lineHeight: 16 }}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          });
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Ionicons name="ios-search" size={20} />
        <Text style={{ paddingLeft: 90 }}>Search More</Text>
      </TouchableOpacity>
    </View>
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
  suggestion: {
    flex: 0.6,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#D3D3D3",
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
    backgroundColor: "white",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 13,
    marginRight: 23
  },
  button: {
    flex: 0.1,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
    marginTop: 16
  }
});
