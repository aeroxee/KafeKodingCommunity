import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerStackParamList } from "../types/Navigator";
import BottomApp from "./BottomApp";
import { Feed } from "../screens/DrawerScreens";
import {
  Alert,
  Appearance,
  Modal,
  Pressable,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "../colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "react-native-paper";
import { setAppearanceDark, setAppearanceLight } from "react-native-appearance-control";

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const DrawerApp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const isDarkMode = useColorScheme() === "dark";

  const backgroundColor = isDarkMode ? Colors.dark : Colors.white;
  const textColor = isDarkMode ? Colors.white : Colors.dark;

  // Dark
  const [isDark, setIsDarkMode] = useState<boolean>(Appearance.getColorScheme() === "dark");
  const toggleSwitch = () => setIsDarkMode(!isDark);

  useEffect(() => {
    if (isDark) {
      setAppearanceDark();
    } else {
      setAppearanceLight();
    }
  }, [isDark]);

  return (
    <DrawerStack.Navigator
      initialRouteName="BottomApp"
      screenOptions={{
        drawerType: "back",
        drawerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTintColor: textColor,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.white,
        drawerInactiveBackgroundColor: Colors.gray,
        drawerInactiveTintColor: Colors.dark,
        headerRight: () => (
          <>
            <View style={{ marginRight: 20, display: "flex", flexDirection: "row", gap: 20 }}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FontAwesome5Icon name="search" color={textColor} size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleSwitch()}>
                <FontAwesome5Icon name="moon" color={textColor} size={20} />
              </TouchableOpacity>
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={[styles.centeredView]}>
                <View style={[styles.modalView, { backgroundColor: backgroundColor }]}>
                  <Text style={[styles.modalText, { color: textColor }]}>Pencarian</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={[styles.modalText, { color: textColor }]}>Batalkan</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </>
        ),
      }}
    >
      <DrawerStack.Screen
        name="BottomApp"
        component={BottomApp}
        options={{
          title: "Kafe Koding",
        }}
      />
      <DrawerStack.Screen name="Feed" component={Feed} />
    </DrawerStack.Navigator>
  );
};

export default DrawerApp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
