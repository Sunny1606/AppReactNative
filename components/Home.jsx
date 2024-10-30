import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import tateti from "../images/327307189_709425180845062_7974267666483937522_n.jpg";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [isList, setList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const listData = [
    { id: "1", title: "Bodys" },
    { id: "2", title: "Remeras" },
    { id: "3", title: "Pantalones" },
    { id: "4", title: "Shorts" },
    { id: "5", title: "Buzos" },
    { id: "6", title: "Conjuntos" },
    { id: "7", title: "Accesorios" },
    { id: "8", title: "Calzado" },
  ];

  //click en cualquier parte de la pantalla sea que se cierre la lista se llama TouchableWithoutFeedback
  const closeList = () => {
    if (isList) {
      setList(false);
    }
    Keyboard.dismiss(); //esconde el teclado tambien
  };

  return (
    <TouchableWithoutFeedback onPress={closeList}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity onPress={() => setList(!isList)}>
              <Ionicons
                style={styles.iconBars}
                name="options"
                size={29}
                color="black"
              />
            </TouchableOpacity>
            {isList && (
              <View style={styles.listContainer}>
                <FlatList
                  data={listData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                      <Text style={styles.listItemText}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="¿Qué buscas?..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity>
              <Icon
                style={styles.searchIcon}
                name="search"
                size={25}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.register}>REGISTRARSE</Text>
          </TouchableOpacity>
          <AntDesign
            style={styles.iconUser}
            name="user"
            size={24}
            color="black"
          />
        </View>
        <Image source={tateti} style={styles.image}></Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90,
    alignItems: "center", // Centra el contenido horizontalmente
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  iconBars: {
    marginLeft: -20,
  },
  homeIcon: {
    marginRight: 10,
  },
  iconUser: {
    marginLeft: 60,
    alignItems: "center",
    width: "80%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 5,
    flex: 1,
    borderRadius: 8,
    borderColor: "#FFA38F",
    marginLeft: 10,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 10,
    flex: 1, // Permite que el TextInput ocupe todo el espacio disponible
  },
  searchIcon: {
    marginLeft: 10, // Agrega un margen a la izquierda del icono
  },
  register: {
    fontSize: 20,
    color: "black",
    padding: 10,
    marginTop: 20,
    textShadowColor: "rgba(0, 0, 0, 0.30)", // Color de la sombra
    textShadowOffset: { width: -1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 10, // Radio de la sombra
  },
  listContainer: {
    position: "absolute", // Coloca la lista en una posición absoluta
    top: 30, // Ajusta la posición vertical de la lista
    left: 0, // Ajusta la posición horizontal de la lista
    backgroundColor: "#f5cba7",
    borderRadius: 5,
    elevation: 5, // Para agregar una sombra en Android
    width: 250,
    maxHeight: 450,
    marginTop: 20,
    zIndex: 10,
  },
  listItem: {
    padding: 10,
  },
  listItemText: {
    fontSize: 17,
    backgroundColor: "beige",
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 500,
    height: 500,
    marginTop: 20,
    resizeMode: "contain",
    opacity: 0.7,
  },
});
