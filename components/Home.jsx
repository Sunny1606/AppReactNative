import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [isList, setList] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const listData = [
    { id: "1", title: "Bodys" },
    { id: "2", title: "Remeras" },
    { id: "2", title: "Pantalones" },
    { id: "2", title: "Shorts" },
    { id: "2", title: "Buzos" },
    { id: "2", title: "Conjuntos" },
    { id: "2", title: "Accesorios" },
    { id: "2", title: "Calzado" },
  ];

  return (
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
          <Icon
            style={styles.searchIcon}
            name="search"
            size={25}
            color="#000"
          />
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
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD18E",
    paddingTop: 50,
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
    color: "white",
    padding: 10,
    marginTop: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Color de la sombra
    textShadowOffset: { width: -1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 10, // Radio de la sombra
  },
  listContainer: {
    position: "absolute", // Coloca la lista en una posición absoluta
    top: 30, // Ajusta la posición vertical de la lista
    left: 0, // Ajusta la posición horizontal de la lista
    backgroundColor: "#E4C59E",
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
    backgroundColor: "#AF8260",
    padding: 5,
    borderRadius: 5,
  },
});
