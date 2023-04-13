import {
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../assets/images";
import { Colors } from "../../colors";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { homePic } from "../../assets/icons";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerStackParamList, RootStackParamList } from "../../types/Navigator";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Pressable } from "react-native";
import { Alert } from "react-native";

type LoginProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "Login">,
  DrawerScreenProps<DrawerStackParamList>
>;

const Login = ({ navigation }: LoginProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const setLoginSubmit = (e: GestureResponderEvent) => {
    e.preventDefault();
    setModalVisible(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const isDarkMode = useColorScheme() === "dark";

  const backgroundColor = isDarkMode ? Colors.dark : Colors.white;

  const textColor = isDarkMode ? Colors.white : Colors.dark;

  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode ? Colors.dark : Colors.white,
          },
        ]}
      >
        <View style={styles.box}>
          <Image source={Logo} resizeMode="cover" style={styles.image} />
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? Colors.white : Colors.dark,
                textShadowColor: "red",
              },
            ]}
          >
            Login Akun
          </Text>
          <View style={styles.inputGroup}>
            <TextInput
              label="Alamat Email"
              onChange={(e) => setEmail(e.nativeEvent.text)}
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={({ color, size }) => <Icon name="envelope" color={color} size={size} />}
                  // containerColor="#333"
                />
              }
              contentStyle={{
                width: "100%",
                backgroundColor: backgroundColor,
                borderWidth: 0.3,
                borderColor: textColor,
                // borderRadius: 10,
              }}
              activeUnderlineColor={Colors.primary}
              autoFocus
              textColor={textColor}
              cursorColor={textColor}
              outlineColor={textColor}
              activeOutlineColor={textColor}
              selectionColor={textColor}
              placeholderTextColor={Colors.gray}
              underlineColor={Colors.gray}
              underlineStyle={{
                height: 2,
              }}
              keyboardType="email-address"
            />
            <TextInput
              label="Kata sandi"
              onChange={(e) => setPassword(e.nativeEvent.text)}
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={({ color, size }) => <Icon name="key" color={color} size={size} />}
                  // containerColor="#333"
                />
              }
              contentStyle={{
                width: "100%",
                backgroundColor: backgroundColor,
                borderWidth: 0.3,
                borderColor: textColor,
                // borderRadius: 10,
              }}
              activeUnderlineColor={Colors.primary}
              textColor={textColor}
              cursorColor={textColor}
              outlineColor={textColor}
              activeOutlineColor={textColor}
              selectionColor={textColor}
              placeholderTextColor={Colors.gray}
              underlineColor={Colors.gray}
              underlineStyle={{
                height: 2,
              }}
              secureTextEntry
            />
            <Button
              icon={({ size, color }) => (
                <Image source={homePic} style={{ width: size, height: size, tintColor: color }} />
              )}
              textColor={Colors.white}
              buttonColor={Colors.primary}
              labelStyle={{ fontWeight: "bold", textTransform: "uppercase" }}
              style={{ marginTop: 10, borderRadius: 5 }}
              loading={isLoading}
              onPress={setLoginSubmit}
              // contentStyle={{ borderRadius: 0 }}
            >
              Login
            </Button>
          </View>
        </View>
      </SafeAreaView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={[modalStyles.modalView, { backgroundColor: backgroundColor }]}>
            <Text style={[modalStyles.modalText, { color: textColor }]}>
              Aplikasi ini dalam pengembangan, jadi anda bisa mereview aplikasi ini.
            </Text>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() =>
                navigation.replace("DrawerApp", {
                  screen: "BottomApp",
                  params: {
                    screen: "Home",
                  },
                })
              }
            >
              <Text style={[modalStyles.modalText, { color: textColor }]}>Lanjutkan</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal */}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
    alignSelf: "center",
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    textAlign: "center",
    // textShadowColor: "#333333",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 3,
      height: 2,
    },
    fontWeight: "bold",
  },

  box: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputGroup: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  input: {
    // width: "100%",
    marginVertical: 5,
  },
});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
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
