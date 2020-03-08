import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CarbonInfo({ data }) {
  const colors = [
    ["#B2E49B", "#66D093"],
    ["#B39273", "#FBA85B"],
    ["#EF9FE2", "#F3B2D9"],
    ["#8CB8F9", "#579BFF"]
  ];

  return (
    <View
      style={{
        flex: 0.6,
        flexDirection: "column",
        marginTop: 14
      }}
    >
      {data.map(ele => {
        return ele.carbonInfo.map((item, i) => {
          return (
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: 6,
                paddingLeft: 18,
                paddingTop: 5
              }}
              key={i}
            >
              <View
                style={{
                  width: "75%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, lineHeight: 16 }}
                >
                  {item.type}
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, lineHeight: 16 }}
                >
                  {item.quantity} kg
                </Text>
              </View>
              <View
                style={{
                  width: "75%",
                  height: "80%",
                  backgroundColor: "#EDECEC",
                  flex: 0.4,
                  marginTop: 6,
                  borderRadius: 6,
                  position: "relative"
                }}
              >
                <LinearGradient
                  colors={[colors[i][0], colors[i][1]]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    flex: 1,
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: `${item.quantity}` * 100,
                    flex: 0.2,
                    marginTop: 6,
                    borderRadius: 6
                  }}
                ></LinearGradient>
              </View>
            </View>
          );
        });
      })}
    </View>
  );
}
