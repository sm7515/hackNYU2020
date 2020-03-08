import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
// import axios from "axios";

export default function search({ data }) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([""]);

  const handleChange = text => {
    setInput(text);
  };

  const handleSubmit = e => {
    const query = e.nativeEvent.text;
    // axios
    //   .get(`http://localhost:3000/recipeId?name=${query}`)
    //   .then(res => console.log(res));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 40 }}>
        <SearchBar
          autoFocus
          platform="ios"
          onChangeText={text => handleChange(text)}
          onSubmitEditing={e => handleSubmit(e)}
          placeholder="search food "
          value={input}
          keyboardType="default"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
