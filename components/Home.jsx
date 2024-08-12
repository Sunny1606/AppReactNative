// import {
//   StyleSheet,
//   TextInput,
//   View,
//   TouchableOpacity,
//   Text,
//   FlatList,
// } from "react-native";
// import React, { useState } from "react";
// import Icon from "react-native-vector-icons/Ionicons";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Carousel from "react-native-snap-carousel";

// import { useNavigation } from "@react-navigation/native";

// export default function Home() {
//   const [isList, setList] = useState(false);

//   const [searchQuery, setSearchQuery] = useState("");

//   const navigation = useNavigation();

//   const listData = [
//     { id: "1", title: "Bodys" },
//     { id: "2", title: "Remeras" },
//     { id: "2", title: "Pantalones" },
//     { id: "2", title: "Shorts" },
//     { id: "2", title: "Buzos" },
//     { id: "2", title: "Conjuntos" },
//     { id: "2", title: "Accesorios" },
//     { id: "2", title: "Calzado" },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={{ uri: item.imageUrl }} style={styles.carouselImage} />
//     </View>
//   );
//   const carouselItems1 = [
//     {
//       id: "1",
//       imageUrl:
//         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchildrens-spaces.com%2Fes%2Fmoda-infantil-ropa-para-ninos-y-ninas%2F&psig=AOvVaw30QCFaNJpgTG9XIBageG6T&ust=1723161542673000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDJupOL5IcDFQAAAAAdAAAAABAE",
//     },
//     { id: "2", imageUrl: "" },
//     { id: "3", imageUrl: "" },
//   ];

//   // const carouselItems2 = [
//   //   { id: "1", imageUrl: "" },
//   //   { id: "2", imageUrl: "" },
//   //   { id: "3", imageUrl: "" },
//   // ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View>
//           <TouchableOpacity onPress={() => setList(!isList)}>
//             <Ionicons
//               style={styles.iconBars}
//               name="options"
//               size={29}
//               color="black"
//             />
//           </TouchableOpacity>
//           {isList && (
//             <View style={styles.listContainer}>
//               <FlatList
//                 data={listData}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                   <TouchableOpacity style={styles.listItem}>
//                     <Text style={styles.listItemText}>{item.title}</Text>
//                   </TouchableOpacity>
//                 )}
//               />
//             </View>
//           )}
//         </View>
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="¿Qué buscas?..."
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//           <Icon
//             style={styles.searchIcon}
//             name="search"
//             size={25}
//             color="#000"
//           />
//         </View>
//       </View>
//       <View>
//         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//           <Text style={styles.register}>REGISTRARSE</Text>
//         </TouchableOpacity>
//         <AntDesign
//           style={styles.iconUser}
//           name="user"
//           size={24}
//           color="black"
//         />
//       <View style={styles.carouselContainer}>
//         <Text style={styles.carouselTitle}>Carrusel 1</Text>
//         <Carousel
//           data={carouselItems1}
//           renderItem={renderItem}
//           sliderWidth={screenWidth}
//           itemWidth={screenWidth * 0.8}
//           loop={true}
//         />
//       </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFD18E",
//     paddingTop: 50,
//     alignItems: "center", // Centra el contenido horizontalmente
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "80%",
//     marginBottom: 10,
//   },
//   iconBars: {
//     marginLeft: -20,
//   },
//   homeIcon: {
//     marginRight: 10,
//   },
//   iconUser: {
//     marginLeft: 60,
//     alignItems: "center",
//     width: "80%",
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     padding: 5,
//     flex: 1,
//     borderRadius: 8,
//     borderColor: "#FFA38F",
//     marginLeft: 10,
//   },
//   input: {
//     fontSize: 20,
//     paddingHorizontal: 10,
//     flex: 1, // Permite que el TextInput ocupe todo el espacio disponible
//   },
//   searchIcon: {
//     marginLeft: 10, // Agrega un margen a la izquierda del icono
//   },
//   register: {
//     fontSize: 20,
//     color: "white",
//     padding: 10,
//     marginTop: 20,
//     textShadowColor: "rgba(0, 0, 0, 0.75)", // Color de la sombra
//     textShadowOffset: { width: -1, height: 1 }, // Desplazamiento de la sombra
//     textShadowRadius: 10, // Radio de la sombra
//   },
//   listContainer: {
//     position: "absolute", // Coloca la lista en una posición absoluta
//     top: 30, // Ajusta la posición vertical de la lista
//     left: 0, // Ajusta la posición horizontal de la lista
//     backgroundColor: "#E4C59E",
//     borderRadius: 5,
//     elevation: 5, // Para agregar una sombra en Android
//     width: 250,
//     maxHeight: 450,
//     marginTop: 20,
//     zIndex: 10,
//   },
//   listItem: {
//     padding: 10,
//   },
//   listItemText: {
//     fontSize: 17,
//     backgroundColor: "#AF8260",
//     padding: 5,
//     borderRadius: 5,
//   },

//   // ... tus estilos existentes ...
//   carouselContainer: {
//     marginTop: 20,
//   },
//   carouselItem: {
//     backgroundColor: "white",
//     borderRadius: 5,
//     height: 200,
//     padding: 10,
//     marginLeft: 25,
//     marginRight: 25,
//   },
//   carouselImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 5,
//   },
//   carouselTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
// });

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
    { id: "3", title: "Pantalones" },
    { id: "4", title: "Shorts" },
    { id: "5", title: "Buzos" },
    { id: "6", title: "Conjuntos" },
    { id: "7", title: "Accesorios" },
    { id: "8", title: "Calzado" },
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
    alignItems: "center",
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
    flex: 1,
  },
  searchIcon: {
    marginLeft: 10,
  },
  register: {
    fontSize: 20,
    color: "white",
    padding: 10,
    marginTop: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  iconUser: {
    marginLeft: 60,
  },
  listContainer: {
    position: "absolute",
    top: 30,
    left: 0,
    backgroundColor: "#E4C59E",
    borderRadius: 5,
    elevation: 5,
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
