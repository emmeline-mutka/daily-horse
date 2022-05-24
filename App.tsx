import React from "react";
import { ContextProvider } from "./context/Context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase/app";
import firebaseConfig from "./services/firebase";
import { useFonts } from "expo-font";
import { StackScreens } from "./helpers/types";
import { LoginScreen } from "./screens/LoginScreen";
import { CreateAccountScreen } from "./screens/CreateAccountScreen";
import { DiaryScreen } from "./screens/DiaryScreen";
import { EmptyEntryScreen } from "./screens/EmptyEntryScreen";
import { EntryDetailsScreen } from "./screens/EntryDetailsScreen";

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
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              header: () => null,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateAccountScreen"
            component={CreateAccountScreen}
            options={{
              header: () => null,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DiaryScreen"
            component={DiaryScreen}
            options={{
              header: () => null,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EmptyEntryScreen"
            component={EmptyEntryScreen}
            options={{
              header: () => null,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EntryDetailsScreen"
            component={EntryDetailsScreen}
            options={{
              header: () => null,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
