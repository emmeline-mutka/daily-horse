import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import DiaryScreen from "./screens/DiaryScreen";
import DeleteModalComponent from "./components/DeleteModalComponent";
import EmptyEntryComponent from "./components/EmptyEntryComponent";
import EntryWithContentComponent from "./components/EntryWithContentComponent";

firebase.initializeApp(firebaseConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lora-Regular': require("./assets/fonts/lora/Lora-Regular.ttf"),
    'Lora-Bold': require("./assets/fonts/lora/Lora-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <EntryWithContentComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
