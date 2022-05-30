import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
//@ts-ignore
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface ICreateAccountScreen extends NativeStackScreenProps<StackScreens, "CreateAccountScreen"> {
}

export const CreateAccountScreen: React.FC<ICreateAccountScreen> = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPressed, setIsPressed] = useState(false)
  const auth = getAuth();
  const registerUser = () => {
    createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    props.navigation.navigate("DiaryScreen")
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
};
  
  return (
    <View style={styles.container}>
      <Text style={styles.createTitle}>Skapa konto</Text>
      <View style={styles.createContainer}>
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
      <View style={styles.buttonContainer}>
        <Pressable style={isPressed ? [styles.createButton, styles.onPressIn] : styles.createButton} onPressIn={() => {setIsPressed(true)}} onPressOut={() => {setIsPressed(false)}} onPress={registerUser}>
          
          <Text style={styles.createText}>Skapa konto</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5c2b81",
    width: "100%",
    alignItems: "center",
  },
  createTitle: {
    marginTop: 160,
    fontFamily: "Lora-Bold",
    fontSize: 26,
    textTransform: "uppercase",
    color: "#ffffff",
  },
  createContainer: {
    position: "absolute",
    top: 240,
    marginTop: 60,
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailInput: {
    paddingLeft: 10,
    height: 30,
    width: 300,
    fontFamily: "Lora-Regular",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  label: {
    marginLeft: 10,
    fontFamily: "Lora-Bold",
    fontSize: 14,
    textTransform: "uppercase",
    color: "#ffffff",
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordInput: {
    paddingLeft: 10,
    height: 30,
    width: 300,
    fontFamily: "Lora-Regular",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 200,
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
  onPressIn: {
    backgroundColor: "#1e9ed1",
  },
  createText: {
      fontFamily: "Lora-Bold",
      fontSize: 18,
      textTransform: "uppercase",
      color: "#ffffff",
      alignSelf: "center",
  },
});
