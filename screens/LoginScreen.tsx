import React, { useContext, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { StyleSheet, Text, TextInput, View, Image, Pressable, SafeAreaView } from "react-native";
//@ts-ignore
import logoImg from "../assets/img/dh-logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../context/Context";

interface ILoginScreen extends NativeStackScreenProps<StackScreens, "LoginScreen"> {
}

export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const context = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);
  const auth = getAuth();
  const loginUser = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    props.navigation.navigate("DiaryScreen")
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };
  const createAccountNavigation = () => {
    props.navigation.navigate("CreateAccountScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.dhLogo} source={logoImg} />
      <View style={styles.loginContainer}>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.emailInput} onChangeText={(text) => setEmail(text)}
        value={email} />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Lösenord</Text>
          <TextInput style={styles.passwordInput} secureTextEntry={true} onChangeText={(text) => setPassword(text)}
        value={password} />
        </View>
      </View>
        <Pressable style={isLoginPressed ? [styles.loginButton, styles.onPressIn] : styles.loginButton} onPressIn={() => {setIsLoginPressed(true)}} onPressOut={() => {setIsLoginPressed(false)}} onPress={loginUser}>
          <Text style={styles.loginText}>Logga in</Text>
        </Pressable>
        <Pressable style={isRegisterPressed ? [styles.createButton, styles.onPressIn] : styles.createButton} onPressIn={() => {setIsRegisterPressed(true)}} onPressOut={() => {setIsRegisterPressed(false)}} onPress={createAccountNavigation}>
          <Text style={styles.createText}>Skapa konto</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 80,
  },
  dhLogo: {
    width: 275,
    height: 191,
    resizeMode: "contain",
  },
  loginContainer: {
    marginVertical: 40,
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailInput: {
    paddingLeft: 10,
    height: 30,
    width: 300,
    fontFamily: "Lora-Regular",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  label: {
    marginLeft: 10,
    fontFamily: "Lora-Bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordInput: {
    paddingLeft: 10,
    height: 30,
    width: 300,
    fontFamily: "Lora-Regular",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  loginButton: {
    height: 50,
    width: 300,
    marginTop: 20,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#5c2b81",
  },
  onPressIn: {
    backgroundColor: "#1e9ed1",
  },
  loginText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  createButton: {
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b83c96",
  },
  createText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
