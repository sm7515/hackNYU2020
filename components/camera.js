import React, { useState, useEffect, createRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
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
    // console.log(camera);
    if (camera) {
      camera.takePictureAsync({ skipProcessing: true }).then(data => {
        setPhoto(data.uri);
      });
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    setPhoto(result.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={styles.camera}
        type={type}
        ref={ref => {
          camera = ref;
        }}
      ></Camera>
      <View
        style={{
          flex: 0.2,
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
          <Ionicons name="ios-camera" size={48} color="black" />
        </TouchableOpacity>

        {/** barcode */}
        <TouchableOpacity style={styles.barcode}>
          <MaterialCommunityIcons name="barcode-scan" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 0.7,
    marginTop: 40
  },
  album: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    marginLeft: 30
  },
  cameraIcon: {
    flex: 0.1,
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
