import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  return (
    <View style={styles.container}>
      <CustomTextInput input={name} onChange={setName} />
      <NIMInput input={nim} onChange={setNim} />

      <Text>Nama: {name}</Text>
      <Text>NIM: {nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
});