import { StyleSheet, Text, TextInput, View, SafeAreaView, Pressable } from "react-native";
//@ts-ignore
import { Ionicons } from "@expo/vector-icons";

const EditEntryComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.arrowBack}>
        <Ionicons name="arrow-back-circle-outline" size={48} color="#ffffff" />
      </Pressable>
      <View style={styles.dateAndTitleContainer}>
        <Text style={styles.dateText}>14/5</Text>
        <Text style={styles.titleText}>Dressyr</Text>
      </View>
      <View style={styles.entryContainer}>
        <Text style={styles.entryText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Text>
      </View>
      <Pressable style={styles.editButton}>
        <Text style={styles.editText}>Redigera</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#5c2b81",
    alignItems: "center",
  },
  arrowBack: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  dateAndTitleContainer: {
    marginTop: 80,
  },
  dateText: {
    marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 0,
    width: 200,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: {
    paddingLeft: 10,
    width: 300,
    fontFamily: "Lora-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  entryContainer: {
    marginTop: 25,
    marginBottom: 100,
    height: 350,
    width: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  entryText: {
    padding: 15,
    height: 350,
    width: 300,
    fontFamily: "Lora-Regular",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  editButton: {
    marginBottom: 25,
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b83c96",
  },
  editText: {
    fontFamily: "Lora-Bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: "#ffffff",
    alignSelf: "center",
  },
});

export default EditEntryComponent;
