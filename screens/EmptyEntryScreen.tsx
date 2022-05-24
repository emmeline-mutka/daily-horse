import React, { FC, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
//@ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { Context } from "../context/Context";

interface IEmptyEntryScreen
  extends NativeStackScreenProps<StackScreens, "EmptyEntryScreen"> {}

export const EmptyEntryScreen: FC<IEmptyEntryScreen> = (props) => {
  const context = useContext(Context);
  const firestore = getFirestore();
  const auth = getAuth();
  const uid = auth.currentUser?.uid;
  const [entryDate, setEntryDate] = useState(String);
  const [entryTitle, setEntryTitle] = useState(String);
  const [diaryEntry, setDiaryEntry] = useState(String);
  
  let id = context?.item.id;
  let entryRef: any;
  // if (uid) {
  //   entryRef = doc(firestore, uid, id)
  //   console.log("Entry Ref: ", entryRef)
  // }

  const goBackNav = () => {
    props.navigation.goBack();
    context?.setIsEditing(false)
  };

  const addEntries = async () => {
    if (auth.currentUser) {
      try {
        const docRef = await addDoc(collection(firestore, uid!), {
          date: entryDate,
          title: entryTitle,
          entry: diaryEntry,
          id: "",
        });
        await updateDoc(docRef, {
          id: docRef.id,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const updateEntries = async () => {
    await updateDoc(entryRef, {
      date: entryDate,
      title: entryTitle,
      entry: diaryEntry,
    });
    context?.setIsEditing(false)
  };

  useEffect(() => {
    if (context?.isEditing) {
    setEntryDate(context?.item.date)
    setEntryTitle(context?.item.title)
    setDiaryEntry(context?.item.entry)
    }
  }, [context?.isEditing])

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.arrowBack} onPress={goBackNav}>
        <Ionicons name="arrow-back-circle-outline" size={48} color="#ffffff" />
      </Pressable>
      <View style={styles.dateAndTitleContainer}>
        <TextInput
          placeholder="Datum"
          onChangeText={(value) => setEntryDate(value)}
          style={styles.dateInput}
          value={entryDate}
        ></TextInput>
        <TextInput
          placeholder="Rubrik"
          onChangeText={(value) => setEntryTitle(value)}
          style={styles.titleInput}
          value={entryTitle}
        ></TextInput>
      </View>
      <View style={styles.entryContainer}>
        <TextInput
          multiline={true}
          onChangeText={(value) => setDiaryEntry(value)}
          style={styles.entryText}
          value={diaryEntry}
        ></TextInput>
      </View>
      {/* <Pressable style={styles.saveButton} onPress={ context?.isEditing ? updateEntries : () => addEntries()}> */}
      <Pressable style={styles.saveButton} onPress={ () => addEntries()}>
        <Text style={styles.saveText}>Spara</Text>
      </Pressable>
      <Pressable style={styles.deleteButton}>
        <Text style={styles.deleteText}>Ta bort</Text>
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
    padding: 15,
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
  },
});
