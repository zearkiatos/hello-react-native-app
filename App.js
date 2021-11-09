import React from "react";
import { StyleSheet, View } from "react-native";
import CameraDemo from "./src/components/CameraDemo";

export default function App() {
  return (
    <View style={styles.container}>
      <CameraDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
