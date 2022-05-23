import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { useFonts } from "expo-font";
import { StackScreens } from "./helpers/types";
import { LoginScreen } from "./screens/LoginScreen";
import { CreateAccountScreen } from "./screens/CreateAccountScreen";
import { DiaryScreen } from "./screens/DiaryScreen";
import { EmptyEntryScreen } from "./screens/EmptyEntryScreen";
import DeleteModalComponent from "./components/DeleteModalComponent";
import EntryWithContentComponent from "./components/EntryWithContentComponent";
import EditEntryComponent from "./components/EditEntryComponent";

firebase.initializeApp(firebaseConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/fonts/lora/Lora-Regular.ttf"),
    "Lora-Bold": require("./assets/fonts/lora/Lora-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator<StackScreens>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            header: () => null,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DiaryScreen"
          component={DiaryScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EmptyEntryScreen"
          component={EmptyEntryScreen}
          options={{
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <LoginScreen />
    //   {/* <CreateAccountScreen /> */}
    //   {/* <DiaryScreen /> */}
    //   {/* <EmptyEntryComponent /> */}
    //   {/* <DeleteModalComponent /> */}
    //   {/* <EntryWithContentComponent /> */}
    //   {/* <EditEntryComponent /> */}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
