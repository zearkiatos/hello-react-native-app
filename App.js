import React from "react";
import { StyleSheet, View } from "react-native";
import ModalDemo from "./src/components/ModalDemo";

export default function App() {
  return (
    <View style={styles.container}>
      <ModalDemo />
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
