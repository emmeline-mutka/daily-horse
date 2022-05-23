import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
//@ts-ignore
import { AntDesign } from "@expo/vector-icons";
import { EntryButtonComponent } from "./EntryButtonComponent";

const EntryWithContentComponent = () => {
  const firestore = getFirestore();
  const auth = getAuth();

  const readEntries = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.diaryTitle}>Dagbok</Text>
      <View style={styles.entriesContainer}>
        <View style={styles.containerEntry}>
          <Text style={styles.dateEntry}>16/5</Text>
          <Text style={styles.titleEntry}>Dressyr</Text>
          <View style={styles.doubleRight}>
            <AntDesign name="doubleright" size={24} color="#000000" />
          </View>
        </View>
        <View style={styles.containerEntry}>
          <Text style={styles.dateEntry}>17/5</Text>
          <Text style={styles.titleEntry}>Hoppning</Text>
          <View style={styles.doubleRight}>
            <AntDesign name="doubleright" size={24} color="#000000" />
          </View>
        </View>
        <View style={styles.containerEntry}>
          <Text style={styles.dateEntry}>18/5</Text>
          <Text style={styles.titleEntry}>Uteritt</Text>
          <View style={styles.doubleRight}>
            <AntDesign name="doubleright" size={24} color="#000000" />
          </View>
        </View>
      </View>
      <View style={styles.entryButton}>
        <EntryButtonComponent />
      </View>
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
  diaryTitle: {
    marginTop: 40,
    fontFamily: "Lora-Bold",
    fontSize: 32,
    textTransform: "uppercase",
    color: "#ffffff",
  },
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

export default EntryWithContentComponent;
