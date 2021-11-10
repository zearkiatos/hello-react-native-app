import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Camera } from "expo-camera";
const PERMISSIONS = {
  GRANTED: "granted",
};

const CameraDemo = () => {
  const [permission, setPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermission(status === PERMISSIONS.GRANTED);
    console.log(status);
  };

  useEffect(() => {
    getPermission();
  });

  if (permission === null) {
    return (
      <View>
        <Text>Waiting Permission...</Text>
      </View>
    );
  }

  if (permission === false) {
    return (
      <View>
        <Text>We don't have access to the camera</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <Button
          title="Flip"
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const newType = type === back ? front : back;
            setType(newType);
          }}
        ></Button>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});

export default CameraDemo;
