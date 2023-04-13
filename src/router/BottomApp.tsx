import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomStackParamList } from "../types/Navigator";
import { Add, Chats, Gallery, Home, Setting } from "../screens/BottomScreens";
import { Text, useColorScheme } from "react-native";
import { Colors } from "../colors";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const BottomStack = createMaterialTopTabNavigator<BottomStackParamList>();

const BottomApp = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <BottomStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => <Text>Loading</Text>,
        swipeEnabled: false,
        animationEnabled: true,
        tabBarPressColor: Colors.gray,
        tabBarInactiveTintColor: Colors.gray,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.dark : Colors.white,
        },
      }}
      tabBarPosition="bottom"
    >
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome5Icon name="home" color={color} size={25} />,
        }}
      />
      <BottomStack.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="chat-outline" color={color} size={25} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Add"
        component={Add}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicon name="add" color={color} size={25} />,
        }}
      />
      <BottomStack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome5Icon name="user" color={color} size={25} />,
        }}
      />
      <BottomStack.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome5Icon name="cog" color={color} size={25} />,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomApp;
