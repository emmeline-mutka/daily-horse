import { FC } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

interface IDeleteModalComponent {
  yesButton: () => void;
  noButton: () => void;
}

export const DeleteModalComponent: FC<IDeleteModalComponent> = (props) => { 

  return (
    <View style={styles.container}>
      <Text style={styles.deleteText}>Vill du ta bort det här inlägget?</Text>
      <Pressable style={styles.yesButton} onPress={props.yesButton}>
        <Text style={styles.answerText}>Ja</Text>
      </Pressable>
      <Pressable style={styles.noButton} onPress={props.noButton}>
      <Text style={styles.answerText}>Nej</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#5c2b81",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  deleteText: {
    fontFamily: "Lora-Bold",
    fontSize: 16,
    textTransform: "uppercase",
    color: "#ffffff",
  },
  yesButton: {
    marginTop: 20,
    backgroundColor: "#b83c96",
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
  },
  noButton: {
    marginTop: 20,
    backgroundColor: "#1e9ed1",
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
  },
  answerText: {
    fontFamily: "Lora-Bold",
    fontSize: 16,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
  },
});
