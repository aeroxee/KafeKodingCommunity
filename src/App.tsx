import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootApp from "./router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "./colors";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <StatusBar
        animated
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? Colors.dark : Colors.white}
      />
      <NavigationContainer>
        <RootApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
