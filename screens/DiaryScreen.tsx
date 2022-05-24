import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
//@ts-ignore
import { EntryButtonComponent } from "../components/EntryButtonComponent";
import { EntryComponent } from "../components/EntryComponent";
import { Context } from "../context/Context";

interface IDiaryScreen
  extends NativeStackScreenProps<StackScreens, "DiaryScreen"> {}

export const DiaryScreen: React.FC<IDiaryScreen> = (props) => {
  const context = useContext(Context);
  const [entryList, setEntryList] = useState<any[]>([]);
  const emptyEntryNavigation = () => {
    props.navigation.navigate("EmptyEntryScreen");
  };

  const firestore = getFirestore();
  const auth = getAuth();
  const readEntries = async () => {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      try {
        const docRef = await getDocs(collection(firestore, uid));
        docRef.forEach((entryItem) => {
          console.log("Här finns ett inlägg: ", entryItem.data());
          if (
            !entryList.some(
              (item: { id: any }) => item.id === entryItem.data().id
            )
          ) {
            setEntryList((entryList) => [...entryList, entryItem.data()]);
          }
        });
      } catch (e) {
        console.error("Error reading document:", e);
      }
    }
  };

  const entryDetailsNavigation = (item: any) => {
    context?.setItem(item)
    props.navigation.navigate("EntryDetailsScreen");
  };

  useEffect(() => {
    readEntries();
  }, []);

  useEffect(() => {
    console.log("EntryList: ", entryList);
  }, [entryList]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.diaryTitle}>Dagbok</Text>
      {entryList.length > 0 ? (
        <View>
          {entryList.map((item: {}, index: number) => {
            return ( <Pressable onPress={() => entryDetailsNavigation(item)} key={index}>
            <EntryComponent item={item} />
            </Pressable>);
          })}
        </View>
      ) : (
        <View style={styles.noEntryContainer}>
          <Text style={styles.noEntryText}>
            Du har inte lagt till något ännu...
          </Text>
        </View>
      )}

      <View style={styles.entryButton}>
        <EntryButtonComponent triggerFunction={emptyEntryNavigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5c2b81",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  diaryTitle: {
    marginTop: 40,
    fontFamily: "Lora-Bold",
    fontSize: 32,
    textTransform: "uppercase",
    color: "#ffffff",
  },
  entriesContainer: {
    marginBottom: 20,
  },
  noEntryContainer: {
    marginTop: 25,
    height: 500,
    width: 300,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  noEntryText: {
    fontFamily: "Lora-Regular",
    fontSize: 16,
    alignSelf: "center",
  },
  entryButton: {
    marginTop: 50,
  },
});
