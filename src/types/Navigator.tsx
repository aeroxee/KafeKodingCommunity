import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  DrawerApp: NavigatorScreenParams<DrawerStackParamList>;
};

export type DrawerStackParamList = {
  Feed: undefined;
  BottomApp: NavigatorScreenParams<BottomStackParamList>;
};

export type BottomStackParamList = {
  Home: undefined;
  Chats: undefined;
  Gallery: undefined;
  Add: undefined;
  Account: undefined;
  Setting: undefined;
};
