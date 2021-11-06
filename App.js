import React from "react";
import { StyleSheet, View } from "react-native";
import ModalDemo from "./src/components/ModalDemo";
import AlertDemo from "./src/components/AlertDemo";
import GeolocalizationDemo from "./src/components/GeolocalizationDemo";

export default function App() {
  return (
    <View style={styles.container}>
      <ModalDemo />
      <AlertDemo />
      <GeolocalizationDemo />
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
