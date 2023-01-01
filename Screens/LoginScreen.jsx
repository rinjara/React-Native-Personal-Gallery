import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimentions, setDimentions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimentions(width);
    };
    Dimensions.addEventListener("change", onChange);

    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/photo_bg.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapper}>
              <View style={{ ...styles.form, width: dimentions }}>
                <Text style={styles.title}>Войти</Text>
                <TextInput
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Адрес электронной почты"
                  style={styles.input}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />

                <TextInput
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  placeholder="Пароль"
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />

                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.5}
                  onPress={handleSubmit}
                >
                  <Text style={{ color: "#fff" }}>Войти</Text>
                </TouchableOpacity>

                <Text style={styles.text}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 25,
    position: "relative",
    minHeight: 549,
  },
  form: {
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  input: {
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  title: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
    marginTop: 32,
  },
  button: {
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43 - 16,
  },
  text: {
    textAlign: "center",
    marginTop: 16,
    marginBottom: 144,
    fontSize: 16,
    color: "#1B4371",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    left: 128,
    top: -60,
  },
});
