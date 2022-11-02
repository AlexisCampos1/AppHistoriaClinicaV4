import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Button,
    Image,
    Text,
    ScrollView,
    Alert
  } from 'react-native';
import { ref, set, update } from "firebase/database";
import { db } from "../components/config";
import Tts from 'react-native-tts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../components/config";
import RNRestart from 'react-native-restart';

export default function App({navigation}){
    const [textInputPassword, setTextInputPassword] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputDNI, setTextInputDNI] = useState('');

    const checkTextInput = () => {
      if(!textInputDNI.trim()){
        Alert.alert("Mensaje de alerta","Falta rellenar el DNI del especialista medico")
        return;
      }
      if(!textInputEmail.trim()){
        Alert.alert("Mensaje de alerta","No existen datos por actualizar en Correo")
        return;
      }
      if(!textInputPassword.trim()){
        Alert.alert("Mensaje de alerta","No existen datos por actualizar en Contraseña")
        return;
      }
      update(ref(db, 'users/' + textInputDNI), {  
        DNI:textInputDNI, 
        Email:textInputEmail,       
        Contraseña:textInputPassword,
      })

      Alert.alert('Successfully','Actualizacion exitosa');
      navigation.navigate("Home");
    }

    const eventocancelar = () => {
      navigation.navigate("Home");
    }

return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.form}>
      <View style={styles.container}>
        <View>
          <ScrollView>
          <Text style = {styles.titulo}>INGRESE SU DNI ACTUAL</Text>
          </ScrollView>
        </View>
      <View style={{marginTop: 20}}></View>
        <Text>DNI</Text>
        <TextInput
          placeholder="DNI"
          onChangeText={
            (value) => setTextInputDNI(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View>
          <ScrollView>
          <Text></Text>
          <Text style = {styles.titulo}>ACTUALICE SUS DATOS</Text>
          </ScrollView>
        </View>
      <View style={{marginTop: 20}}></View>
        <Text>Correo electronico</Text>
        <TextInput
          placeholder="Correo electronico"
          onChangeText={
            (value) => setTextInputEmail(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View style={{marginTop: 20}}></View>
        <Text>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          onChangeText={
            (value) => setTextInputPassword(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View style={{marginTop: 50}}>
          <Button 
            title="ACTUALIZAR"
            onPress = {() => {checkTextInput()}}
            color="#515152"
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button 
            title="CANCELAR"
            onPress = {() => {eventocancelar()}}
            color="#515152"
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor:'white',
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 1,
  },
  titulo: {
    marginTop: 10,
    fontSize: 18, // tamaño del texto
    color: 'darkcyan', // color del texto
    fontWeight: 'bold', //texto en negrita
  },
});
