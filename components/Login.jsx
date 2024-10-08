import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Login() {
  const navigation = useNavigation();

  const closeInput = () => {
    Keyboard.dismiss(); 
  }

  return (
    <TouchableWithoutFeedback onPress={closeInput}>
      <View style={styles.conteiner}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons
            style={styles.iconBack}
            name="arrow-back-ios-new"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.conteinerTextWelcome}>
          <AntDesign
            style={styles.iconUser}
            name="user"
            size={24}
            color="black"
          />
          <Text style={styles.textWelcome}>Bienvenido</Text>
        </View>
        <TextInput style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textC}>Continuar</Text>
        </TouchableOpacity>
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separatorLine} />
        </View>
        <TouchableOpacity style={styles.buttonG}>
          <AntDesign
            style={styles.iconGoogle}
            name="google"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#AF8260",
  },
  text: {
    marginTop: 80,
  },
  iconBack: {
    marginTop: 80,
    marginLeft: 10,
  },
  input: {
    fontSize: 15,
    paddingTop: 10,
    marginTop: 50,
    backgroundColor: "white",
    padding: 10,
    fontSize: 15,
    width: "90%",
    marginLeft: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "black",
    marginLeft: 105,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 10,
    width: 200,
  },
  buttonG: {
    backgroundColor: "black",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 10,
    width: 250,
    marginLeft: 80,
  },
  textC: {
    fontSize: 15,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginLeft: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  separatorText: {
    marginHorizontal: 10,
    color: "black",
    fontSize: 15,
  },
  textG: {
    color: "white",
  },
  conteinerTextWelcome: {
    marginLeft: 160,
    marginTop: 50,
  },
  iconUser: {
    marginLeft: 30,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
  },
  textWelcome: {
    fontSize: 18,
    letterSpacing: 0.25,
  },
});
