import React from "react";
import { View } from "react-native";
import Header from "./header";
import DailyCarbon from "./dailyCarbon";
import TodayData from "./todayData";
import Footer from "./footer";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <DailyCarbon />
      <TodayData navigation={navigation} />
      <Footer />
    </View>
  );
}
