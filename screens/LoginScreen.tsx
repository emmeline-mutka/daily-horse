import { StyleSheet, Text, TextInput, View, Image, Pressable } from "react-native";
//@ts-ignore
import logoImg from "../assets/img/dh-logo.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.dhLogo} source={logoImg} />
      <View style={styles.loginContainer}>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.emailInput} />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Lösenord</Text>
          <TextInput style={styles.passwordInput} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Logga in</Text>
        </Pressable>
        <Pressable style={styles.createButton}>
          <Text style={styles.createText}>Skapa konto</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 100,
  },
  dhLogo: {
    width: 275,
    height: 191,
    resizeMode: "contain",
  },
  loginContainer: {
    position: "absolute",
    top: 200,
    marginTop: 60,
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailInput: {
    paddingLeft: 10,
    height: 30,
    width: 300,
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
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 150,
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

export default LoginScreen;
