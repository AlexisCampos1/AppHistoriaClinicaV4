import React , { useState, useEffect }from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Button,
    Image,
    Text,
    Alert
  } from 'react-native';
import {textInputUser, textInputPassword } from "../pages/Singin1";
import Tts from 'react-native-tts';
import { ref, get, child, push } from "firebase/database";
import { db} from "../components/config";
import home from "../navigation/mainstck"
import { signInAnonymously } from 'firebase/auth';
import RenderHtml from 'react-native-render-html';
const App = ({navigation}) => {
    const [textInputlUser, setTextInputUser] = useState("");
    const [textInputlPassword, setTextInputPassword] = useState('');
    const [textInputDNI, setTextInputDNI] = useState([]);
    const [ listTasks , setListTasks] = useState([]);
    const dbRef = ref(db);
    useEffect(() => {
        let list = [];
        get(child(dbRef,`users/${textInputDNI}`)).then((snapshot) => {
        snapshot.forEach(
          document => {
                let Contraseña = document.val().Contraseña
                let Correo = document.val().Email
                const obj = {Contraseña,Correo}
                list.push(obj);
        }
        )
        setListTasks(list);
        })
    },[])

    const checkTextInput = () => {
        //Check for the Name TextInput
        /*if(textInputUser == undefined){
          Tts.stop();
          Tts.speak('Rellenar todos los campos');
          Alert.alert('MENSAJE DE ALERTA','Rellenar todos los campos');
          return;
        }*/


        if (!textInputlUser.trim()) {
        Tts.stop();
        Tts.speak('Rellenar todos los campos');
        Alert.alert('ADVERTENCIA','Rellenar todos los campos');
        return;
      }else{
        if (!textInputlPassword.trim()) {
          Tts.stop();
          Tts.speak('Rellenar todos los campos');
          Alert.alert('MENSAJE DE ALERTA','Rellenar todos los campos');
          return;
        }else{
          for(var i = 0;listTasks[i]!=undefined; i++){
            if(listTasks[i].Correo==textInputlUser){
              if(listTasks[i].Contraseña==textInputlPassword){
                navigation.navigate('Home');
                
                break;
              }else{
              Tts.stop();
              Tts.speak('El Usuario y, o Contraseña ingresados son incorrectos');
              Alert.alert('El Usuario y, o Contraseña ingresados son incorrectos');
              break;
              }
          }
          }
        }

      }
    }
return (
    <SafeAreaView style={{flex: 1}}>
       <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/minsa.png")} />
      </View>
      <View style={styles.container}>
        <Text>CORREO</Text>
        <TextInput
          placeholder="Correo"
          value = {textInputUser}
          onChangeText={
            (value) => setTextInputUser(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <View style={{marginTop: 20}}></View>
        <Text>CONTRASEÑA</Text>
        <TextInput
          placeholder="Contraseña"
          onChangeText={
            (value) => setTextInputPassword(value)
          }
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
          secureTextEntry
        />
        <View style={{marginTop: 50}}>
          <Button 
            title="Ingresar"
            onPress = {checkTextInput}
            color="#2374f7" 
          />
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Registrarse"
            onPress = {() => {navigation.navigate('Registrarse')}}
            color="#2374f7" 
          />
        </View>
      </View>
    </SafeAreaView>
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
  body: {
    margin: 12,
  },
  image: {
    width: "100%",
    height: 100,
    marginVertical: 20,
    alignSelf: "center",
  },
});
 
export default App;