import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, Button } from "react-native";
import StyledText from "../components/StyledText.jsx";
import RNRestart from 'react-native-restart';
const Home = ({ nameDoctor,navigation }) => {
  const refrecsh =() =>{
    navigation.navigate('Login1');
    RNRestart.Restart();
  }
  return (
    <>
      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/minsa.png")} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row_buttons}>

        <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigation.navigate('RegisterHistoria')
          }} title="RegisterHistoria"
          ><StyledText style={styles.textbotones}>Registrar Historia Clinica</StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigation.navigate('VisualizeMH')
          }} title="Historia clinica"
          >
            <StyledText style={styles.textbotones}>Visualizar Historia Clinica</StyledText>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity style={styles.botonajuste} onPress={()=>{
            navigation.navigate('Edision')
          }} title="Edision">
            <StyledText style={styles.textbotones}>Reporte de edicion</StyledText>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View>
          <Text style = {styles.titulo}>AJUSTES PRINCIPALES</Text>
          </View>
          <View style={styles.row_buttons}>
            <TouchableOpacity style={styles.botonajuste}
            onPress={()=>{
              navigation.navigate('Actualizar')
            }}
            ><StyledText style={styles.textbotones}>Actualizacion de datos</StyledText>
            </TouchableOpacity>
            </View>
            <Text></Text>
          <TouchableOpacity style={styles.botonajuste}
            onPress={refrecsh}>
            <StyledText style={styles.textbotones}>Cerrar Sesion</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },

  header: {
    backgroundColor: "#AEC0B6",
  },
  body: {
    margin: 12,
    // backgroundColor: "black",
  },
  buttons: {
    alignItems: "center",
  },
  row_buttons: {
    flexDirection: "row",
  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "45%",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
  textbotones: {
    color: "black",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },

  image: {
    width: "100%",
    height: 100,
    marginVertical: 20,
    alignSelf: "center",
  },
  botonajuste: {
    backgroundColor: "#AEC0B6",
    borderRadius: 20,
    alignItems: "center",
    width: 380,
    justifyContent: "center",
    padding: 10,
  },
  titulo: {
    marginTop: 10,
    fontSize: 18, // tamaño del texto
    color: 'darkcyan', // color del texto
    fontWeight: 'bold', //texto en negrita
    textAlign: "center",
  },
});

export default Home;
