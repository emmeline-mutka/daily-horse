import React, { StyleSheet, Text, TextInput, View, Pressable, SafeAreaView } from "react-native";
//@ts-ignore
import { Ionicons } from '@expo/vector-icons';

const EmptyEntryComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.arrowBack}>
      <Ionicons name="arrow-back-circle-outline" size={48} color="#ffffff" />
      </Pressable>
      <View style={styles.dateAndTitleContainer}>
        <TextInput placeholder="Datum" style={styles.dateInput}></TextInput>
        <TextInput placeholder="Rubrik" style={styles.titleInput}></TextInput>
      </View>
      <View style={styles.entryContainer}>
        <TextInput multiline={true} style={styles.entryText}></TextInput>
      </View>
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>Spara</Text>
      </Pressable>
      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteText}>Ta bort</Text>
      </Pressable>
    </SafeAreaView>
  ) 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#5c2b81",
    alignItems: "center",
  },
  arrowBack: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  dateAndTitleContainer: {
    marginTop: 80,
  },
  dateInput: {
    marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 0,
    width: 200,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  }, 
  titleInput: {
    paddingLeft: 10,
    // height: 50,
    width: 300,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  entryContainer: {
    marginTop: 25,
    marginBottom: 25,
    height: 350,
    width: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  entryText: {
    paddingTop: 10,
    paddingLeft: 10,
    height: 350,
    width: 300,
    fontFamily: "Lora-Regular",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  saveButton: {
    marginBottom: 25,
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b83c96",
  },
  deleteButton: {
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#1e9ed1",
  },
  saveText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
  },
  deleteText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
  }
})

export default EmptyEntryComponent;
