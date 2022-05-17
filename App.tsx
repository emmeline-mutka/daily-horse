import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";

firebase.initializeApp(firebaseConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    'LifeSavers-Regular': require("./assets/fonts/life-savers/LifeSavers-Regular.ttf"),
    'LifeSavers-Bold': require("./assets/fonts/life-savers/LifeSavers-Bold.ttf"),
    'LifeSavers-ExtraBold': require("./assets/fonts/life-savers/LifeSavers-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CreateAccountScreen />
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
