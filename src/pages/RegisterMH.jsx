import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Text,
  Alert
} from "react-native";
import StyledText from "../components/StyledText.jsx";
import VoiceToText from "../components/VoiceToText.jsx";
import Tts from 'react-native-tts';
const RegisterMH = ({ namePaciente, navigation }) => {

  const mensajeAlertando = () =>{
    Tts.stop();
    Tts.speak('Historia cancelada exitosamente');
    Alert.alert('MENSAJE','Historia cancelada exitosamente');
    navigation.navigate('Home');
  }
  return (
    <>
      <View style={styles.header}>
        <StyledText style={styles.text}>
          Nombre de paciente {namePaciente}
        </StyledText>
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.buttons}>
        <VoiceToText/>
        <View style={styles.buttonfirma}>
          <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('Firma')}}>
            <StyledText style={styles.textfirma}>Firma</StyledText>
          </TouchableOpacity>
        </View>
        <View style={styles.row_buttons}>
          <TouchableOpacity style={styles.button} onPress={ mensajeAlertando}> 
            <StyledText style={styles.text}>Cancelar</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  textArea: {
    height: 290,
    width: 240,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
  },
  image_mic: {
    width: 50,
    height: 50,
  },
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
    justifyContent: "center",
  },
  dictado: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  row_buttons: {
    flexDirection: "row",
  },
  buttonfirma: {
    flexDirection: "row",
  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
  textfirma: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default RegisterMH;
