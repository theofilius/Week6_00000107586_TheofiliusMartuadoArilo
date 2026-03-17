import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

interface CustomProps {
  input: string;
  onChange: (value: string) => void;
}

export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={styles.input}
        value={input}
        onChangeText={onChange}
      />
    </View>
  );
};

export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM"
        style={styles.input}
        value={input}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
});