import React, { useState, useEffect, createRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import Footer from "./footer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function camera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  let camera = createRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    photo && navigation.navigate("Result", { photo: photo });
  });

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      camera
        .takePictureAsync({ skipProcessing: true, base64: true })
        .then(data => {
          setPhoto(data.base64);
        });
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    setPhoto(result.base64);
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/** go back */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="ios-arrow-round-back" size={36} color="black" />
      </TouchableOpacity>
      <Camera
        style={styles.camera}
        type={type}
        ref={ref => {
          camera = ref;
        }}
      ></Camera>
      <View
        style={{
          flex: 0.15,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          flexDirection: "row"
        }}
      >
        {/** choose from album */}
        <TouchableOpacity
          style={styles.album}
          onPress={() => {
            pickImage();
          }}
        >
          <Ionicons name="ios-albums" size={36} color="black" />
        </TouchableOpacity>

        {/** take picture */}
        <TouchableOpacity
          onPress={() => takePicture()}
          style={styles.cameraIcon}
        >
          <MaterialCommunityIcons name="camera-iris" size={60} color="black" />
        </TouchableOpacity>

        {/** barcode */}
        <TouchableOpacity style={styles.barcode}>
          <MaterialCommunityIcons name="barcode-scan" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  back: { marginBottom: 40, marginLeft: 30, position: "absolute", top: 46 },
  camera: {
    marginTop: 100,
    flex: 0.7
  },
  album: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    marginLeft: 30
  },
  cameraIcon: {
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 30
  },
  barcode: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    marginRight: 30
  }
});
