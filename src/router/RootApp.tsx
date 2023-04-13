import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigator";
import { Login, Register, Splash } from "../screens/RootScreens";
import DrawerApp from "./DrawerApp";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootApp = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerApp" component={DrawerApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootApp;
