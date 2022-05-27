import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreens } from "../helpers/types";
import { StyleSheet, Text, Pressable } from "react-native";
//@ts-ignore
import { MaterialCommunityIcons } from '@expo/vector-icons';


// interface IEntryButtonComponent extends NativeStackScreenProps<StackScreens, "EntryButtonComponent"> {


// export const EntryButtonComponent: React.FC<IEntryButtonComponent> = (props) => {
  export const EntryButtonComponent = ({navigateToEmptyEntry}: any) => {
  return (
    <Pressable style={styles.entryButton} onPress= {() => navigateToEmptyEntry()}>
      <MaterialCommunityIcons name="book-edit-outline" size={48} color="#e3e3e3" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  entryButton: {
    height: 100,
    width: 100,
    backgroundColor: "#b83c96",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
