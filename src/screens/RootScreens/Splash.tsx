import { Image, StyleSheet, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../colors";
import logo from "../../assets/images/logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigator";

type SplashProps = NativeStackScreenProps<RootStackParamList, "Splash">;

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.dark : Colors.white,
        },
      ]}
    >
      <Image source={logo} style={styles.image} resizeMode="cover" />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    // tintColor: "#FFFFFF",
  },
});
