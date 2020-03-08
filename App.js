import React, { useState, useEffect, createRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import camera from "./components/camera";
import result from "./components/result";
import search from "./components/search";
import home from "./components/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Camera" component={camera} />
        <Stack.Screen name="Result" component={result} />
        <Stack.Screen name="Search" component={search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
