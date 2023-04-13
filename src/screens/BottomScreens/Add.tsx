import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../colors";

const Add = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.dark : Colors.white }]}>
      <Text style={{ color: isDarkMode ? Colors.white : Colors.dark }}>Add</Text>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
