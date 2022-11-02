import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Image,
  Text,
  StyledText,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import { ref, get, child } from "firebase/database";
import { db } from "../components/config";
const HU = (paciente) => {
  const [listTasks, setListTasks] = useState([])
  const [Nombre, setNombre] = useState([]);
  const [DNI, setDNI] = useState([]);
  const [Cuenta_SIS, setCuenta_SIS] = useState([]);
  const [FechaNacimiento, setFechaNacimiento] = useState([]);
  const [Sexo, setSexo] = useState([]);
  const [Edad, setEdad] = useState([]);
  const [LugarNacimiento, setLugarNacimiento] = useState([]);
  const [Procedencia, setProcedencia] = useState([]);
  const [Grupo_Sangineo, setGrupo_Sangineo] = useState([]);
  const [Saturacion, setSaturacion] = useState([]);
  const [Temperatura, setTemperatura] = useState([]);
  const [FecuenciaCardiaca, setFecuenciaCardiaca] = useState([]);
  const [PresionArterial, setPresionArterial] = useState([]);
  const [Antecedentes, setAntecedentes] = useState([]);
  const [ObsercacionGeneral, setObsercacionGeneral] = useState([]);
  const [Diagnostico, setDiagnostico] = useState([]);
  const dbRef = ref(db);
  useEffect(() => {
    let list = [];
    get(child(dbRef, `HistoriaDePacientes/${DNI}`)).then((snapshot) => {
      snapshot.forEach(
        document => {
          if (document.val().DNI == paciente.route.params.dnipaciente ) {
            let Nombre = document.val().Nombre
            let Antecedentes = document.val().Antecedentes
            let Cuenta_SIS = document.val().Cuenta_SIS
            let DNI = document.val().DNI
            let Diagnostico = document.val().Diagnostico
            let Edad = document.val().Edad
            let FechaNacimiento = document.val().FechaNacimiento
            let Sexo = document.val().Sexo
            let LugarNacimiento = document.val().LugarNacimiento
            let Procedencia = document.val().Procedencia
            let Grupo_Sangineo = document.val().Grupo_Sangineo
            let Saturacion = document.val().Saturacion
            let Temperatura = document.val().Temperatura
            let FecuenciaCardiaca = document.val().FecuenciaCardiaca
            let PresionArterial = document.val().PresionArterial
            let ObsercacionGeneral = document.val().ObsercacionGeneral
            setNombre(Nombre)
            setDNI(DNI)
            setCuenta_SIS(Cuenta_SIS)
            setFechaNacimiento(FechaNacimiento)
            setSexo(Sexo)
            setEdad(Edad)
            setLugarNacimiento(LugarNacimiento)
            setProcedencia(Procedencia)
            setGrupo_Sangineo(Grupo_Sangineo)
            setSaturacion(Saturacion)
            setTemperatura(Temperatura)
            setFecuenciaCardiaca(FecuenciaCardiaca)
            setPresionArterial(PresionArterial)
            setAntecedentes(Antecedentes)
            setObsercacionGeneral(ObsercacionGeneral)
            setDiagnostico(Diagnostico)
            const obj = { Nombre, Antecedentes, Cuenta_SIS, DNI, Diagnostico, Edad, FechaNacimiento, Sexo, LugarNacimiento, Procedencia, Grupo_Sangineo, Saturacion, Temperatura, FecuenciaCardiaca, PresionArterial, ObsercacionGeneral }
            list.push(obj);
          }
        }
      )
      setListTasks(list);
      console.log(list);
      console.log(paciente);
    })
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.form}>
        <View style={styles.container}>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textArea} underlineColorAndroid="transparent">
              <Text style={styles.text}>Historia Clinica</Text>
            </Text>
          </View>

          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Cuenta con SIS: {Cuenta_SIS} </Text>
            </Text>
          </View>

          <View style={styles.textAreaContainer}>
            <Text style={styles.textArea} underlineColorAndroid="transparent">
              <Text style={styles.text}>DATOS GENERALES</Text>
            </Text>
          </View>

          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Apellidos y Nombres     Fecha Nacimiento </Text>
            </Text>
          </View>
          <Text> </Text>
          <View style={styles.row}>
            <View style={styles.textInputStyle}>
              <TextInput
                multiline = {true}
                numberOfLines = {10} 
                placeholder="Apellidos y Nombres"
                underlineColorAndroid="transparent">
                {Nombre}
              </TextInput>
            </View>
            <View style={styles.textInputStyle}>
              <TextInput
                multiline = {true}
                numberOfLines = {10} 
                placeholder="Fecha Nacimiento"
                underlineColorAndroid="transparent">
                {FechaNacimiento}
              </TextInput>
            </View>
          </View>
          <Text> </Text>
          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>DNI:                   Sexo:                Edad:  </Text>
            </Text>
          </View>
          <View style={styles.row}>
            <TextInput placeholder="Fecha Nacimiento"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle2}
            >
              {DNI}
            </TextInput>
            <TextInput placeholder="Fecha Nacimiento"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle2}
            >
              {Sexo}
            </TextInput>
            <TextInput placeholder="Fecha Nacimiento"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle2}
            >
              {Edad}
            </TextInput>
          </View>
          <Text> </Text>
          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Lugar de Nac.   Procedencia   G. Sanguineo</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="Lugar de nacimiento"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle3}
            >
              {LugarNacimiento}
            </TextInput>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="Procedencia"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle3}
            >
              {Procedencia}
            </TextInput>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="Grupo sanguíneo"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle3}
            >
              {Grupo_Sangineo}
            </TextInput>
          </View>
          <Text> </Text>
          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Saturación Temperat.  F.Cardiaca P. arterial</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="Saturación"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle4}
              >
              {Saturacion}
            </TextInput>
            <TextInput
              placeholder="Temperatura"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle4}
              >
              {Temperatura}
            </TextInput>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="F.Cardiaca"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle4}
              >
              {FecuenciaCardiaca}
            </TextInput>
            <TextInput
              placeholder="P.Arterial"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle4}
              >
              {PresionArterial}
            </TextInput>
          </View>
          <Text> </Text>
          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Antecedentes          Observaciones generales</Text>
            </Text>
          </View>
          <View style={styles.row2}>
            <View>
              <TextInput
                multiline = {true}
                numberOfLines = {10}
                placeholder="Antecedentes1"
                underlineColorAndroid="transparent"
                style={styles.textInputStyle5}
                >
                {Antecedentes}
              </TextInput>
            </View>
            <TextInput
              multiline = {true}
              numberOfLines = {10}
              placeholder="Observaciones generales"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle6}
              >
              {ObsercacionGeneral}
            </TextInput>
          </View>


          <Text> </Text>
          <Text> </Text>
          <View style={styles.textAreaContainer2}>
            <Text style={styles.textArea2} underlineColorAndroid="transparent">
              <Text style={styles.text2}>Diagnostico</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <TextInput 
              multiline = {true}
              numberOfLines = {10}
              placeholder="Diagnostico"
              underlineColorAndroid="transparent"
              style={styles.textInputStyle7}
              >
              {Diagnostico}
            </TextInput>
          </View>
        </View>

      </ScrollView>


    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "#000000",
    borderRadius: 1,
    borderWidth: 1,
    marginBottom: 5,
    height: 35,
    width: 360,
    textAlign: "center",

  },
  row: {
    flexDirection: "row",
    borderColor: "#000000",
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    height: 25,
    width: 380,
    textAlign: "center",
  },
  row2: {
    flexDirection: "row",
    borderColor: "#000000",
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    height: 100,
    width: 380,
    textAlign: "center",
  },

  textAreaContainer2: {
    borderColor: "#000000",
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 1,
    height: 25,
    width: 370,
    textAlign: "center",

  },
  textAreaContainer3: {
    borderColor: "#000000",
    borderRadius: 1,
    borderWidth: 1,
    marginBottom: 5,
    height: 100,
    width: 380,
    textAlign: "center",

  },

  text: {
    color: "black",
    padding: 3,
    textAlign: "center",
    fontSize: 23,
    fontFamily: "Daytona",
  },
  text2: {
    color: "black",
    padding: 3,
    fontSize: 16,
    fontFamily: "Daytona",
  },
  text3: {
    color: "black",
    padding: 3,
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Daytona",
  },
  text4: {
    color: "black",
    padding: 3,
    textAlign: "right",
    fontSize: 18,
    fontFamily: "Daytona",
  },
  textArea: {
    height: 40,
    width: 380,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
    textAlign: "center",
  },
  textArea2: {
    height: 30,
    width: 380,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
    textAlign: "left",
  },

  textInputStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 180,
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginTop: 4,
    textAlignVertical: "top",
  },

  textInputStyle2: {
    width: 120,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 3,
  },


  textInputStyle3: {
    width: 120,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginTop: 4,
  },
  textInputStyle4: {
    width: 90,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginTop: 3,
  },
  textInputStyle5: {
    width: 156,
    height: 124,
    paddingHorizontal: 1,
    borderWidth: 1,
    marginTop: 2,
    textAlignVertical: "top",
  },
  textInputStyle6: {
    width: 205,
    height: 124,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginTop: 2,
    textAlignVertical: "top",
  },
  textInputStyle7: {
    width: 360,
    height: 50,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginTop: 2,
    textAlignVertical: "top",
  },




  textAreaContainer0: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  textArea0: {
    height: 250,
    width: 320,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
  },
  image_mic: {
    width: 60,
    height: 60,
  },
  container: {
    flex: 1,
    padding: 35,
  },
  dictado: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
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
  row_buttons: {
    flexDirection: "row",
  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 20,
    alignItems: "center",
    width: "70%",
    height: "50%",
    justifyContent: "center",
  },
  text0: {
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
export default HU;