import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Main({ navigation, ...props }) {
  // Main recibe props
  //onPress: Función que se ejecutará cuando se presione el botón.
  const { onPress, title = "EMPEZAR" } = props;

  return (
    //pressable es el componente que detecta las interacciones de los usuarios (toques)
    <View style={styles.conteiner}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "grey",
  },

  button: {
    marginTop: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "white",
    width: 200,
    margin: 110,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
