import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
//@ts-ignore
import { EntryButtonComponent } from "../components/EntryButtonComponent";

interface IDiaryScreen extends NativeStackScreenProps<StackScreens, "DiaryScreen"> {
}

export const DiaryScreen: React.FC<IDiaryScreen> = (props) => {
  const [content, setContent] = useState("default");
  const [displayingContent, setDisplayingContent] = useState(null);
  const emptyEntryNavigation = () => {
    props.navigation.navigate("EmptyEntryScreen")
  }

  // const displayContent(checkContent) {
  //   switch (checkContent) {
  //     case "emptyEntry":
  //       setDisplayingContent(<EmptyEntryComponent />);
  //       break;
  //     default:
  //       setDisplayingContent(<View style={styles.noEntry} />);
  //   }
  // }

  // useEffect(() => {
  //   displayContent(content);
  // }, [content]);

  return (
    <View style={styles.container}>
      <Text style={styles.diaryTitle}>Dagbok</Text>
      <View style={styles.noEntryContainer}>
        <Text style={styles.noEntryText}>
          Du har inte lagt till något ännu...
        </Text>
      </View>
      <View style={styles.entryButton}>
        <EntryButtonComponent triggerFunction={emptyEntryNavigation} />
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