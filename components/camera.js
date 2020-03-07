import React, { useState, useEffect, createRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function camera() {
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
    // console.log(photo);
  }, [photo]);

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
      <View>
        {console.log(photo)}
        {photo !== "" && <Image source={{ isStatic: true, uri: photo }} />}
      </View>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          {/** reverse the lens */}
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
            style={styles.flipIcon}
          >
            <Ionicons name="ios-reverse-camera" size={48} color="white" />
          </TouchableOpacity>

          {/** take picture */}
          <TouchableOpacity
            onPress={() => takePicture()}
            style={styles.cameraIcon}
          >
            <Ionicons
              name="ios-camera"
              size={48}
              color="white"
              onPress={() => {
                takePicture();
              }}
            />
          </TouchableOpacity>

          {/** choose from album */}
          <TouchableOpacity
            style={styles.album}
            onPress={() => {
              pickImage();
            }}
          >
            <Ionicons name="ios-albums" size={48} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  flipIcon: {
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
    marginBottom: 40
  },
  album: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 40,
    marginRight: 30
  }
});
