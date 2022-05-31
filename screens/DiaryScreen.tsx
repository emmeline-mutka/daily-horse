import React, { FC, useContext, useEffect, useState } from "react";
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
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
//@ts-ignore
import { EntryButtonComponent } from "../components/EntryButtonComponent";
import { EntryComponent } from "../components/EntryComponent";
import { Context } from "../context/Context";
import { useIsFocused } from "@react-navigation/native";

interface IDiaryScreen
  extends NativeStackScreenProps<StackScreens, "DiaryScreen"> {}

export const DiaryScreen: FC<IDiaryScreen> = (props) => {
  const context = useContext(Context);
  const [entryList, setEntryList] = useState<any[]>([]);
  const [entryIndex, setEntryIndex] = useState(Number);
  const emptyEntryNavigation = () => {
    props.navigation.navigate("EmptyEntryScreen");
  };
  const isFocused = useIsFocused();

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

  const filterEntries = async () => {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      try {
        const docRef = await getDocs(collection(firestore, uid));
        docRef.forEach((entryItem) => {
          console.log("Här finns ett inlägg: ", entryItem.data());
          setEntryList(entryList.filter((_, i) => i !== entryIndex));
        });
      } catch (e) {
        console.error("Error reading document:", e);
      }
    }
  };

  const updatedEntries = async () => {
    
  }

  const entryDetailsNavigation = (item: any) => {
    context?.setItem(item);
    props.navigation.navigate("EntryDetailsScreen");
  };

  useEffect(() => {
    readEntries();
    console.log("Focused ", isFocused);
  }, [isFocused]);

  useEffect(() => {
    if (context?.entryDeleted) {
      filterEntries();
      console.log("Filtered entries ", entryList);
      context?.setEntryDeleted(false);
      context?.setItem({
        date: "",
        title: "",
        entry: "",
        id: "",
      });
    }
  }, [context?.entryDeleted]);

  useEffect(() => {
    console.log("EntryList: ", entryList);
  }, [entryList]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollviewContainer}
      >
        <Text style={styles.diaryTitle}>Dagbok</Text>
        {entryList.length > 0 ? (
          <View>
            {entryList.map((item: {}, index: number) => {
              return (
                <Pressable
                  onPress={() => [
                    entryDetailsNavigation(item),
                    setEntryIndex(index),
                  ]}
                  key={index}
                >
                  <EntryComponent item={item} />
                </Pressable>
              );
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
          <EntryButtonComponent navigateToEmptyEntry={emptyEntryNavigation} />
        </View>
      </ScrollView>
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
  contentContainerStyle: {
    alignItems: "center",
  },
  scrollviewContainer: {
    width: "100%",
    alignContent: "center",
  },
  diaryTitle: {
    marginTop: 40,
    fontFamily: "Lora-Bold",
    fontSize: 32,
    textTransform: "uppercase",
    color: "#ffffff",
  },
  noEntryContainer: {
    marginTop: 25,
    height: 500,
    width: 300,
    backgroundColor: "#ffffff96",
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
    marginVertical: 50,
  },
});
