import { StyleSheet, Text, Pressable } from "react-native";
//@ts-ignore
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EntryButtonComponent = () => {
  return (
    <Pressable style={styles.entryButton}>
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

export default EntryButtonComponent;
