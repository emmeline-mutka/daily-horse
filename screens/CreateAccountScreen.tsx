import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
//@ts-ignore

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.createTitle}>Skapa konto</Text>
      <View style={styles.createContainer}>
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
    backgroundColor: "#5C2B81",
    width: "100%",
    alignItems: "center",
  },
  createTitle: {
    marginTop: 160,
    fontFamily: "LifeSavers-ExtraBold",
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
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  label: {
    marginLeft: 10,
    fontFamily: "LifeSavers-ExtraBold",
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
    backgroundColor: "#B83C96",
  },
  createText: {
      fontFamily: "LifeSavers-ExtraBold",
      fontSize: 18,
      textTransform: "uppercase",
      color: "#ffffff",
      alignSelf: "center",
  },
});

export default CreateAccountScreen;
