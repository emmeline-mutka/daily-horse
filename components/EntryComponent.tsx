import { StyleSheet, Text, View, Pressable } from "react-native";
//@ts-ignore
import { AntDesign } from "@expo/vector-icons";

interface IEntryComponent {item: any}

export const EntryComponent: React.FC<IEntryComponent> = (props) => {

  return (
        <View style={styles.containerEntry}>
          <Text style={styles.dateEntry}>{props.item.date}</Text>
          <Text style={styles.titleEntry}>{props.item.title}</Text>
          <Pressable style={styles.doubleRight}>
            <AntDesign name="doubleright" size={24} color="#000000" />
          </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
  entriesContainer: {
    marginBottom: 20,
  },
  containerEntry: {
    marginTop: 30,
    height: 120,
    width: 250,
    backgroundColor: "#b83c96",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  dateEntry: {
    position: "absolute",
    top: 10,
    left: 10,
    fontFamily: "Lora-Bold",
    fontSize: 20,
    color: "#000000",
  },
  titleEntry: {
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#000000",
    alignSelf: "center",
  },
  doubleRight: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  entryButton: {
    marginTop: 50,
  },
});
