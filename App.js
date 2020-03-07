import React, { useState, useEffect, createRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import camera from "./components/camera";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
