import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CarbonCard() {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <LinearGradient
        colors={["#5CCD92", "#BFE89C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container1}
      >
        <LinearGradient
          colors={["#FFFFFF", "#C4DAB1"]}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            position: "relative"
          }}
        >
          <LinearGradient
            colors={["#6CD194", "#82D796"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              position: "absolute",
              alignSelf: "center",
              top: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 25, lineHeight: 27, color: "white" }}>
              40%
            </Text>
          </LinearGradient>
        </LinearGradient>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
            60.5 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
          </Text>
          <Text style={{ color: "white" }}>Carbon Emitted</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
            60.5 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
          </Text>
          <Text style={{ color: "white" }}>Increase</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["#FD9B8D", "#FBBE7E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container2}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {/** bar */}
          <View
            style={{
              position: "relative",
              height: 80,
              width: 7,
              borderColor: "white",
              borderRadius: 6,
              borderWidth: 1,
              marginRight: 10
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 25 * 3,
                width: 5,
                backgroundColor: "white",
                borderRadius: 6,
                bottom: 0,
                left: 0
              }}
            ></View>
          </View>
          {/** category */}
          <View>
            <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
              25 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "bold"
              }}
            >
              Land Use
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View
            style={{
              position: "relative",
              height: 80,
              width: 7,
              borderColor: "white",
              borderRadius: 6,
              borderWidth: 1,
              marginRight: 10
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 15 * 3,
                width: 5,
                backgroundColor: "white",
                borderRadius: 6,
                bottom: 0,
                left: 0
              }}
            ></View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
              15 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "bold"
              }}
            >
              Farm
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View
            style={{
              position: "relative",
              height: 80,
              width: 7,
              borderColor: "white",
              borderRadius: 6,
              borderWidth: 1,
              marginRight: 10
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 2.5 * 3,
                width: 5,
                backgroundColor: "white",
                borderRadius: 6,
                bottom: 0,
                left: 0
              }}
            ></View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
              2.5 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "bold"
              }}
            >
              Animal Feed
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View
            style={{
              position: "relative",
              height: 80,
              width: 7,
              borderColor: "white",
              borderRadius: 6,
              borderWidth: 1,
              marginRight: 10
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 5 * 3,
                width: 5,
                backgroundColor: "white",
                borderRadius: 6,
                bottom: 0,
                left: 0
              }}
            ></View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 20, lineHeight: 23 }}>
              5 <Text style={{ fontSize: 10, lineHeight: 12 }}>lb</Text>
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "bold"
              }}
            >
              Processing
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    marginBottom: 20,
    height: 113,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 30
  },
  container2: {
    marginBottom: 20,
    height: 113,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14
  }
});
