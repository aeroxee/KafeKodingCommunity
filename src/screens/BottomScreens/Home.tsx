import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../colors";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.dark : Colors.white }]}>
      <Text style={{ color: isDarkMode ? Colors.white : Colors.dark }}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
