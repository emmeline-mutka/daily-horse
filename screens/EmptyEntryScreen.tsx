import React, { FC, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
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
  Modal,
  Alert,
} from "react-native";
//@ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { Context } from "../context/Context";
import { DeleteModalComponent } from "../components/DeleteModalComponent";

interface IEmptyEntryScreen
  extends NativeStackScreenProps<StackScreens, "EmptyEntryScreen"> {}

export const EmptyEntryScreen: FC<IEmptyEntryScreen> = (props) => {
  const context = useContext(Context);
  const firestore = getFirestore();
  const auth = getAuth();
  const uid = auth.currentUser?.uid;
  const [dateToday, setDateToday] = useState(null);
  const [entryTitle, setEntryTitle] = useState(String);
  const [diaryEntry, setDiaryEntry] = useState(String);
  const [modalVisible, setModalVisible] = useState(false);
  
  let id = context?.item.id;
  let entryRef: any;
  let entrySnapshot: any;

  const goBackNav = () => {
    props.navigation.goBack();
    context?.setIsEditing(false);
  };

  const addEntries = async () => {
    if (auth.currentUser) {
      try {
        const docRef = await addDoc(collection(firestore, uid!), {
          date: dateToday,
          title: entryTitle,
          entry: diaryEntry,
          id: "",
        });
        await updateDoc(docRef, {
          id: docRef.id,
        });
        console.log("Document written with ID: ", docRef.id);
        props.navigation.navigate("DiaryScreen");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const updateEntries = async () => {
    if (uid) {
      entryRef = doc(firestore, uid, id);
      entrySnapshot = await getDoc(entryRef);
      console.log("Entry Ref: ", entryRef);
      props.navigation.navigate("DiaryScreen");
    }
    await updateDoc(entryRef, {
      date: dateToday,
      title: entryTitle,
      entry: diaryEntry,
    });
    context?.setIsEditing(false);
    context?.setIsUpdated(true);
  };

  const deleteEntries = async () => {
    await deleteDoc(doc(firestore, uid!, id));
    console.log("Här är borttaget id: ", id);
    context?.setEntryDeleted(true);
    props.navigation.navigate("DiaryScreen");
  };

  useEffect(() => {
    let today = new Date();
    let date: any = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    setDateToday(date);
  }, []);

  useEffect(() => {
    if (context?.isEditing) {
      setDateToday(context?.item.date);
      setEntryTitle(context?.item.title);
      setDiaryEntry(context?.item.entry);
    }
  }, [context?.isEditing]);

  return (
    <SafeAreaView
      style={modalVisible ? [styles.container, styles.faded] : styles.container}
    >
      <Pressable style={styles.arrowBack} onPress={goBackNav}>
        <Ionicons name="arrow-back-circle-outline" size={48} color="#ffffff" />
      </Pressable>
      <View style={styles.dateAndTitleContainer}>
        <Text style={styles.dateText}>{dateToday}</Text>
        <TextInput
          placeholder="Rubrik"
          multiline={true}
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <DeleteModalComponent
            yesButton={() => deleteEntries()}
            noButton={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </Modal>
      <Pressable
        style={styles.saveButton}
        onPress={context?.isEditing ? updateEntries : () => addEntries()}
      >
        <Text style={styles.saveText}>Spara</Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => setModalVisible(true)}
      >
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
  faded: {
    opacity: 0.2,
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
    height: 40,
    width: 150,
    color: "#ffffff",
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
    color: "#ffffff",
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
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    color: "#ffffff",
  },
  yesButton: {
    marginTop: 20,
    backgroundColor: "#b83c96",
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
  },
  noButton: {
    marginTop: 20,
    backgroundColor: "#1e9ed1",
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
  },
  answerText: {
    fontFamily: "Lora-Bold",
    fontSize: 16,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
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
