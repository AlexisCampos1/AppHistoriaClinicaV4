import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Button,
    Image,
    Text,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import StyledText from "../components/StyledText.jsx";
import { ref, set } from "firebase/database";
import { db } from "../components/config";
import Tts from 'react-native-tts';
import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from "@react-native-voice/voice";
const RegisterHistoria = ({ navigation }) => {

    const [end, setEnd] = useState("");
    const [started, setStarted] = useState("");
    const languageInput = "es-PE";

    ////Datos del paciente
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
    const [numero, setnumero] = useState([]);

//datos de api
    const [TextInputnombre, setNombreAPI] = useState([]);
    const [TextInputdni, setDNIAPI] = useState([]);
    const [TextInputgrupo_sangineo, setGruposangineoAPI] = useState([]);
    const [TextInputedad, setEdadAPI] = useState([]);
    const [TextInputprocedencia, setProcedenciaAPI] = useState([]);
    const [Textantecedentes_familiares, setantecedentes_familiaresAPI] = useState([]);
    const [Textantecedentes_personales, setantecedentes_personalesAPI] = useState([]);
    const [Textdiagnosticos, setdiagnosticosAPI] = useState([]);
    const [Textobservaciones, setobservacionesAPI] = useState([]);
    const [Textpeso, setpesoAPI] = useState([]);
    const [Textpresion_arterial, setpresion_arterialAPI] = useState([]);
    const [Texttemperatura, settemperaturaAPI] = useState([]);
    const [textsexo, setSexoAPI] = useState([]);
    const [Textestado_civil, setestado_civilAPI] = useState([]);
    const [TextAltura, setAlturaAPI] = useState([]);

//datos para la base de datos

    const [DNIbd, setDNIbd] = useState([]);
    const [Sexobd, setSexobd] = useState([]);
    const [Edadbd, setEdadbd] = useState([]);
    const [Procedenciabd, setProcedenciabd] = useState([]);
    const [Grupo_Sangineobd, setGrupo_Sangineobd] = useState([]);
    const [Temperaturabd, setTemperaturabd] = useState([]);
    const [PresionArterialbd, setPresionArterialbd] = useState([]);
    const [Antecedentesbd, setAntecedentesbd] = useState([]);
    const [ObsercacionGeneralbd, setObsercacionGeneralbd] = useState([]);
    const [Diagnosticobd, setDiagnosticobd] = useState([]);


    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechStart = onSpeechStart;
    fetch('https://api-nlp-pry20220112.herokuapp.com/spacy/', {
      method: 'POST',
      headers: {
           'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              texto: Nombre[0]+DNI[0]+Cuenta_SIS[0]+FechaNacimiento[0]+Edad[0]+LugarNacimiento[0]+Procedencia[0]+Grupo_Sangineo[0]+Saturacion[0]+Temperatura[0]+FecuenciaCardiaca[0]+PresionArterial[0]+Antecedentes[0]+ObsercacionGeneral[0]+Diagnostico[0]
            
            })
      })
    .then((response) => response.json()) // get response, convert to json
    .then((json) => {
        setNombreAPI(json.nombre);
        setDNIAPI(json.dni);
        setGruposangineoAPI(json.grupo_sanguineo);
        setAlturaAPI(json.altura);
        setEdadAPI(json.edad)
        setProcedenciaAPI(json.procedencia)
        setSexoAPI(json.sexo)
        setantecedentes_familiaresAPI(json.antecedentes_familiares)
        setantecedentes_personalesAPI(json.antecedentes_personales)
        setdiagnosticosAPI(json.diagnosticos)
        setobservacionesAPI(json.observaciones)
        setpesoAPI(json.peso)
        setpresion_arterialAPI(json.presion_arterial)
        settemperaturaAPI(json.temperatura)
        setestado_civilAPI(json.estado_civil)
        console.log(TextInputnombre)
    })

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechStart = (e) => {
        setStarted("√");
    };

    const onSpeechEnd = (e) => {
        setEnd("√");
    };


    //nombre
    const onSpeechResults = (e) => {
        if (numero[0] == "1") {
            console.log("onSpeechResults:", e);
            setNombre(e.value);
        }
        if (numero[0] == "2") {
            console.log("onSpeechResults:", e);
            setCuenta_SIS(e.value);
        }
        if (numero[0] == "3") {
            console.log("onSpeechResults:", e);
            setFechaNacimiento(e.value);
        }
        if (numero[0] == "4") {
            console.log("onSpeechResults:", e);
            setDNI(e.value);
        }
        if (numero[0] == "5") {
            console.log("onSpeechResults:", e);
            setSexo(e.value);
        }
        if (numero[0] == "6") {
            console.log("onSpeechResults:", e);
            setEdad(e.value);
        }
        if (numero[0] == "7") {
            console.log("onSpeechResults:", e);
            setLugarNacimiento(e.value);
        }
        if (numero[0] == "8") {
            console.log("onSpeechResults:", e);
            setProcedencia(e.value);
        }
        if (numero[0] == "9") {
            console.log("onSpeechResults:", e);
            setGrupo_Sangineo(e.value);
        }
        if (numero[0] == "10") {
            console.log("onSpeechResults:", e);
            setSaturacion(e.value);
        }
        if (numero[0] == "11") {
            console.log("onSpeechResults:", e);
            setTemperatura(e.value);
        }
        if (numero[0] == "12") {
            console.log("onSpeechResults:", e);
            setFecuenciaCardiaca(e.value);
        }
        if (numero[0] == "13") {
            console.log("onSpeechResults:", e);
            setPresionArterial(e.value);
        }
        if (numero[0] == "14") {
            console.log("onSpeechResults:", e);
            setAntecedentes(e.value);
        }
        if (numero[0] == "15") {
            console.log("onSpeechResults:", e);
            setObsercacionGeneral(e.value);
        }
        if (numero[0] == "16") {
            console.log("onSpeechResults:", e);
            setDiagnostico(e.value);
        }
    };
    const handleSavePaciente = () => {

        if (Nombre[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor completar el nombre del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor completar el nombre del paciente');
            return;
          }
          if (DNI[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese el DNI del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese el DNI del paciente');
            return;
          }
          if (Cuenta_SIS[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese si el paciente cuenta con sis o no cuenta con sis');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese si el paciente cuenta con sis');
            return;
          }
          if (FechaNacimiento[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la fecha de nacimiento del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la fecha de nacimiento del paciente');
            return;
          }
          if (Sexo[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese el sexo del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese el sexo del paciente');
            return;
          }
          if (Edad[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la edad del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la edad del paciente');
            return;
          }
          if (LugarNacimiento[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor Ingrese el lugar de nacimiento del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor Ingrese el lugar de nacimiento del paciente');
            return;
          }
          if (Procedencia[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la procedencia del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la procedencia del paciente');
            return;
          }
          if (Grupo_Sangineo[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese el grupo sangineo del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese el grupo sanguineo del paciente');
            return;
          }
          if (Saturacion[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la saturacion del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la saturacion del paciente');
            return;
          }
          if (Temperatura[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la temperatura del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la temperatura del paciente');
            return;
          }
          if (FecuenciaCardiaca[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese la frecuencia cardiaca del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la frecuencia cardiaca del paciente');
            return;
          }
          if (PresionArterial[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingree la precion arterial del paciente');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese la presion arterial del paciente');
            return;
          }
          if (Antecedentes[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor ingrese los antecedentes medicos del paciente, si en caso no presentara antecedentes medicos indicar ');
            Alert.alert('MENSAJE DE ALERTA','Por favor ingrese los antecedentes medicos del paciente');
            return;
          }
          if (ObsercacionGeneral[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor complete el nombre del medico a registrar');
            Alert.alert('MENSAJE DE ALERTA','Por favor complete las observaciones generales a registrar');
            return;
          }
          if (Diagnostico[0]==undefined) {
            Tts.stop();
            Tts.speak('Por favor complete el nombre del medico a registrar');
            Alert.alert('MENSAJE DE ALERTA','Por favor complete el diagnostico a registrar');
            return;
          }
        //grupo sangineo
        if(TextInputgrupo_sangineo[0]==undefined){
            setGrupo_Sangineobd(Grupo_Sangineo[0])
            console.log(Grupo_Sangineo)
        }else{
            setGrupo_Sangineobd(TextInputgrupo_sangineo[0])
            console.log(TextInputgrupo_sangineo)
        }
        //procedencia
        if(TextInputprocedencia[0]==undefined){
            setProcedenciabd(Procedencia[0])
            console.log(Procedencia)
        }else{
            setProcedenciabd(TextInputprocedencia[0])
            console.log(TextInputprocedencia)
        }
        //antecedentes  
        if(Textantecedentes_familiares[0]==undefined&&Textantecedentes_personales[0]==undefined){
            setAntecedentesbd(Antecedentes[0])
            console.log(Antecedentes)
        }else{
            setAntecedentesbd(Textantecedentes_familiares[0]+Textantecedentes_personales[0])
            console.log(Textantecedentes_familiares[0]+Textantecedentes_personales[0])
        }
        //diagnosticos
        if(Textdiagnosticos[0]==undefined){
            setDiagnosticobd(Diagnostico[0])
            console.log(Diagnostico)
        }else{
            setDiagnosticobd(Textdiagnosticos[0])
            console.log(Textdiagnosticos)
        }
        //observaciones
        if(Textobservaciones[0]==undefined){
            setObsercacionGeneralbd(ObsercacionGeneral[0])
            console.log(ObsercacionGeneral)
        }else{
            setObsercacionGeneralbd(Textobservaciones[0])
            console.log(Textobservaciones)
        }
        //presion_arterial
        if(Textpresion_arterial[0]==undefined){
            setPresionArterialbd(PresionArterial[0])
            console.log(PresionArterial)
        }else{
            setPresionArterialbd(Textpresion_arterial[0])
            console.log(Textpresion_arterial)
        }
        //temperatura
        if(Texttemperatura[0]==undefined){
            setTemperaturabd(Temperatura[0])
            console.log(Temperatura)
        }else{
            setTemperaturabd(Texttemperatura[0])
            console.log(Texttemperatura)
        }
        //sexo
        if(textsexo[0]==undefined){
            setSexobd(Sexo[0])
            console.log(Sexo)
        }else{
            setSexobd(textsexo[0])
            console.log(textsexo)
        }
        //EDAD
        if(TextInputedad[0]==undefined){
            setEdadbd(Edad[0])
            console.log(Edad)
        }else{
            setEdadbd(TextInputedad[0])
            console.log(TextInputedad)
        }
        set(ref(db, 'HistoriaDePacientes/' + DNI[0]), {
            Nombre: Nombre[0],
            DNI: DNI[0],
            Cuenta_SIS: Cuenta_SIS[0],
            FechaNacimiento: FechaNacimiento[0],
            Sexo: Sexo[0],
            Edad: Edad[0],
            LugarNacimiento: LugarNacimiento[0],
            Procedencia: Procedencia[0],
            Grupo_Sangineo: Grupo_Sangineo[0],
            Saturacion: Saturacion[0],
            Temperatura: Temperatura[0],
            FecuenciaCardiaca: FecuenciaCardiaca[0],
            PresionArterial: PresionArterial[0],
            Antecedentes: Antecedentes[0],
            ObsercacionGeneral: ObsercacionGeneral[0],
            Diagnostico: Diagnostico[0],
        })
        navigation.navigate("Firma");
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.form}>
                <View style={styles.container}>
                    <Text>Apellidos y Nombres</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Apellidos y Nombres"
                            onChangeText={
                                (value) => setNombre(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Nombre[0]}
                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "1";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>



                    <Text>Cuenta con SIS</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Cuenta con SIS"
                            onChangeText={
                                (value) => setCuenta_SIS(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Cuenta_SIS[0]}

                        </TextInput>
                        <TouchableHighlight testID="sisb" onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "2";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>




                    <Text>Fecha Nacimiento</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Fecha Nacimiento"
                            onChangeText={
                                (value) => setFechaNacimiento(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {FechaNacimiento[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "3";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>DNI</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="DNI"
                            onChangeText={
                                (value) => setDNI(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {DNI[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "4";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Sexo</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Sexo"
                            onChangeText={
                                (value) => setSexo(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Sexo[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "5";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Edad</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Edad"
                            onChangeText={
                                (value) => setEdad(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Edad[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "6";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Lugar de nacimiento</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Lugar de nacimiento"
                            onChangeText={
                                (value) => setLugarNacimiento(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {LugarNacimiento[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "7";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Procedencia</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Procedencia"
                            onChangeText={
                                (value) => setProcedencia(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Procedencia[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "8";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Grupo sanguíneo</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Grupo sanguíneo"
                            onChangeText={
                                (value) => setGrupo_Sangineo(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Grupo_Sangineo[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "9";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>saturación</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="saturación"
                            onChangeText={
                                (value) => setSaturacion(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Saturacion[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "10";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Temperatura</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Temperatura"
                            onChangeText={
                                (value) => setTemperatura(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Temperatura[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "11";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Frecuencia Cardiaca</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Frecuencia Cardiaca"
                            onChangeText={
                                (value) => setFecuenciaCardiaca(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {FecuenciaCardiaca[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "12";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Presión Arterial</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Presión Arterial"
                            onChangeText={
                                (value) => setPresionArterial(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {PresionArterial[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "13";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Antecedentes</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Antecedentes"
                            onChangeText={
                                (value) => setAntecedentes(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Antecedentes[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "14";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Observaciones generales</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Observaciones generales"
                            onChangeText={
                                (value) => setObsercacionGeneral(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {ObsercacionGeneral[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "15";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>
                    <Text>Diagnostico</Text>
                    <View style={styles.textAreaContainer0}>
                        <TextInput placeholder="Diagnostico"
                            onChangeText={
                                (value) => setDiagnostico(value)
                            }
                            underlineColorAndroid="transparent"
                            style={styles.textArea0}>
                            {Diagnostico[0]}

                        </TextInput>
                        <TouchableHighlight onPress={async () => {
                            numero[0] = undefined;
                            try {
                                numero[0] = "16";
                                await Voice.start(languageInput);
                                console.log("called start");

                            } catch (e) {
                                console.error(e);
                            }
                        }}>
                            <Image
                                style={{ height: 40, width: 35, }}
                                source={require("../../assets/microphone.png")}
                            />
                        </TouchableHighlight>
                    </View>


                </View>
            </ScrollView>
            <View style={styles.dictado}>
                <View style={styles.row_buttons}>
                    <TouchableOpacity style={styles.button} onPress={handleSavePaciente}>
                        <StyledText style={styles.text0}>Registrar</StyledText>
                    </TouchableOpacity>
                </View>
            </View>
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
        width: 380,
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
        width: 380,
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


    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'space-between',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 4,
    },

    textInputStyle2: {
        width: 120,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        marginTop: 3,
    },


    textInputStyle3: {
        width: 130,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 4,
    },
    textInputStyle4: {
        width: 94,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 3,
    },
    textInputStyle5: {
        width: 156,
        height: 40,
        paddingHorizontal: 1,
        borderWidth: 1,
        marginTop: 2,
    },
    textInputStyle6: {
        width: 230,
        height: 124,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 2,
    },
    textInputStyle7: {
        width: '100%',
        height: 50,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 2,
    },




    textAreaContainer0: {
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: "#1B5BB5",
        borderRadius: 15,
        borderWidth: 2,
        marginBottom: 10,
    },
    textArea0: {
        height: 40,
        width: 330,
        justifyContent: "center",
        textAlignVertical: "top",
        padding: 5,
    },
    image_mic: {
        width: 60,
        height: 60,
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
        width: "40%",
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
export default RegisterHistoria;