import { StyleSheet, Text, View, Pressable } from "react-native";
//@ts-ignore

const DeleteModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.deleteText}>Vill du ta bort det här inlägget?</Text>
      <Pressable style={styles.yesButton}>
        <Text style={styles.answerText}>Ja</Text>
      </Pressable>
      <Pressable style={styles.noButton}>
      <Text style={styles.answerText}>Nej</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#5c2b81",
    alignItems: "center",
    justifyContent: "center",
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

export default DeleteModal;