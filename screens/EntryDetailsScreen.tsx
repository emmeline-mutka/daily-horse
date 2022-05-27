import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
//@ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { Context } from "../context/Context";
interface IEntryDetailsScreen extends NativeStackScreenProps<StackScreens, "EntryDetailsScreen"> {item: any}

export const EntryDetailsScreen: React.FC<IEntryDetailsScreen> = (props) => {
  const context = useContext(Context);
  const goBackNav = () => {
    props.navigation.goBack()
  }
  const editEntryNavigation = () => {
    props.navigation.navigate("EmptyEntryScreen")
    context?.setIsEditing(true) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.arrowBack} onPress={goBackNav}>
        <Ionicons name="arrow-back-circle-outline" size={48} color="#ffffff" />
      </Pressable>
      <View style={styles.dateAndTitleContainer}>
        <Text style={styles.dateText}>{context?.item.date}</Text>
        <Text style={styles.titleText}>{context?.item.title}</Text>
      </View>
      <View style={styles.entryContainer}>
        <Text style={styles.entryText}>{context?.item.entry}</Text>
      </View>
      <Pressable style={styles.editButton} onPress={editEntryNavigation}>
        <Text style={styles.editText}>Redigera</Text>
      </Pressable>
    </SafeAreaView>
  );
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
  dateText: {
    marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 0,
    width: 200,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: {
    paddingLeft: 10,
    width: 300,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  entryContainer: {
    marginTop: 25,
    marginBottom: 100,
    height: 350,
    width: 300,
    backgroundColor: "#ffffff96",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  entryText: {
    padding: 15,
    height: 350,
    width: 300,
    fontFamily: "Lora-Regular",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  editButton: {
    marginBottom: 25,
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b83c96",
  },
  editText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
  },
});