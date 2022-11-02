import React, { useState,useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Image,
  Text,
  ScrollView,
  Alert,
  Linking
} from 'react-native';
import { useField } from "formik";
import { ref, set } from "firebase/database";
import { db } from "../components/config";
import Tts from 'react-native-tts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../components/config";
import RNRestart from 'react-native-restart';
import { async } from '@firebase/util';
import RenderHtml from 'react-native-render-html';
import emailjs from '@emailjs/browser';
import { Formik } from "formik";


export default function App({ navigation }) {
  const [textInputName, setTextInputName] = useState('');
  const [textInputLastname, setTextInputLastname] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputSchoolMedic, setTextInputSchoolMedic] = useState('');
  const [textInputDNI, setTextInputDNI] = useState('');
  const [textInputCenterHealth, setTextInputCenterHealth] = useState('');
  const [textInputLocation, setTextInputLocation] = useState('');
  const [textInputCelular, settextInputCelular] = useState('');

  const checkTextInput = async () => {
    //Check for the Name TextInput


    if (!textInputName.trim() && !textInputLastname.trim() && !textInputPassword.trim() && !textInputConfirmPassword.trim() && !textInputEmail.trim() && !textInputSchoolMedic.trim() && !textInputDNI.trim() && !textInputCenterHealth.trim() && !textInputLocation.trim()) {

      Tts.stop();
      Tts.speak('Faltan rellenar todos los campos');
      Alert.alert('MENSAJE DE ALERTA', 'Faltan rellenar todos los campos');
      return;
    }

    if (!textInputName.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo nombres');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo nombres');
      return;
    }
    //Check for the Email TextInput
    if (!textInputLastname.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo apellidos');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo apellidos');
      return;
    }
    if (!textInputPassword.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo contraseña');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo contraseña');
      return;
    }
    if (!textInputConfirmPassword.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo confirmar contraseña');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo confirmar contraseña');
      return;
    }
    if (!textInputEmail.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo correo electronico');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo correo electronico');
      return;
    }
    if (!textInputSchoolMedic.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el codigo de colegio medico del peru');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el codigo de colegio medico del peru');
      return;
    }
    if (!textInputDNI.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo DNI');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo DNI');
      return;
    }
    if (!textInputCenterHealth.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo Centro de salud');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo Centro de salud');
      return;
    }
    if (!textInputLocation.trim()) {
      Tts.stop();
      Tts.speak('Falta rellenar el campo ubicacion');
      Alert.alert('MENSAJE DE ALERTA', 'Falta rellenar el campo ubicacion');
      return;
    }
    if (textInputConfirmPassword != textInputPassword) {
      Tts.stop();
      Tts.speak('La confirmacion de la contraseña y la contraseña son diferentes');
      Alert.alert('MENSAJE DE ALERTA', 'La confirmacion de la contraseña y la contraseña son diferentes');
      return;
    }
    if (textInputPassword.length < 5) {
      Tts.stop();
      Tts.speak('La contraseña debe tener un minimo de 5 caracteres');
      Alert.alert('MENSAJE DE ALERTA', 'La contraseña debe tener un minimo de 5 caracteres');
      return;
    }
    if (/[^0-9a-zA-Z]/.test(textInputPassword)) {
      Tts.stop();
      Tts.speak('La contraseña debera contener caracteres alphanumericos');
      Alert.alert('MENSAJE DE ALERTA', 'La contraseña debera contener caracteres alphanumericos');
      return;
    }
    if (textInputDNI.length != 8) {
      Tts.stop();
      Tts.speak('El DNI tiene que tener 8 caracteres numericos exactos');
      Alert.alert('MENSAJE DE ALERTA', 'El DNI tiene que tener 8 caracteres numericos exactos');
      return;
    }
    if (/[^0-9]/.test(textInputDNI)) {
      Tts.stop();
      Tts.speak('El DNI tiene que tener 8 caracteres numericos exactos');
      Alert.alert('MENSAJE DE ALERTA', 'El DNI tiene que tener 8 caracteres numericos exactos');
      return;
    }
    set(ref(db, 'users/' + textInputDNI), {
      Nombre: textInputName,
      Apellido: textInputLastname,
      Contraseña: textInputPassword,
      ConfirmarContraseña: textInputConfirmPassword,
      Email: textInputEmail,
      CodigoMedico: textInputSchoolMedic,
      DNI: textInputDNI,
      CentroSalud: textInputCenterHealth,
      Ubicacion: textInputLocation,
    })
    //955636623
    /*authentication.createUserWithEmailAndPassword(textInputEmail, textInputPassword)
    .then((users) => {
      console.log(users);
      //const user = userCredential.user;
      alert('Registro exitoso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMesage = error.message;
      console.log(errorMesage);
    })*/
    //Checked Successfully
    //Do whatever you want
    Tts.stop();
    Tts.speak('Registro exitoso');
    Alert.alert('Successfully', 'Registro exitoso');
    navigation.navigate('Login1');
    RNRestart.Restart();
  }


  return (
    <Formik>
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView style={styles.form}>
        <View style={styles.container}>
          <Text>Nombres</Text>
          <TextInput
            placeholder="Nombres"
            onChangeText={
              (value) => setTextInputName(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
            textInputName="name"
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Apellidos</Text>
          <TextInput
            placeholder="Apellidos"
            onChangeText={
              (value) => setTextInputLastname(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Contraseña</Text>
          <TextInput
            placeholder="Contraseña"
            onChangeText={
              (value) => setTextInputPassword(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Confirmar Contraseña</Text>
          <TextInput
            placeholder="Confirmar Contraseña"
            onChangeText={
              (value) => setTextInputConfirmPassword(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Correo electronico</Text>
          <TextInput
            placeholder="Correo electronico"
            onChangeText={
              (value) => setTextInputEmail(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
            textInputName="email"
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Codigo del colegio medico del Peru</Text>
          <TextInput
            placeholder="Codigo del doctor"
            onChangeText={
              (value) => setTextInputSchoolMedic(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>DNI</Text>
          <TextInput
            placeholder="DNI"
            onChangeText={
              (value) => {
                setTextInputDNI(value);
              }
            }
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Centro de salud</Text>
          <TextInput
            placeholder="Centro de salud"
            onChangeText={
              (value) => setTextInputCenterHealth(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 20 }}></View>
          <Text>Ubicacion</Text>
          <TextInput
            placeholder="Ubicacion"
            onChangeText={
              (value) => setTextInputLocation(value)
            }
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <View style={{ marginTop: 50 }}>
            <Button
              title="REGISTRAR"
              onPress={() => { checkTextInput() }}
              color="#2374f7"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 1,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },
});
