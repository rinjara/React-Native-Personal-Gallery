import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/photo_bg.jpg")}
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            // value={name}
            // onChangeText={nameHandler}
            placeholder="Логин"
            style={styles.input}
          />
          <TextInput
            // value={name}
            // onChangeText={nameHandler}
            placeholder="Адрес электронной почты"
            style={styles.input}
          />
          <TextInput
            // value={name}
            // onChangeText={nameHandler}
            placeholder="Пароль"
            style={styles.input}
            secureTextEntry={true}
          />
          {/* <Button title="Зарегистрироваться" /> */}
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Text style={{ color: "#fff" }}>Зарегистрироваться</Text>
          </TouchableOpacity>
          {/* <RegistrationScreen /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // width: 500,
    // height: 500,
  },
  form: {
    minWidth: 375,
    minHeight: 549,
    backgroundColor: "#fff",
    borderRadius: 25,
    // alignItems: "center",
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
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
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
});
