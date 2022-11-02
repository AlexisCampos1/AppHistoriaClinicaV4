import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from "react-native";
import StyledText from "../components/StyledText.jsx";
import { ref, set } from "firebase/database";
import { db } from "../components/config";
import Tts from 'react-native-tts';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";

function VoiceToText() {
  const [recognized, setRecognized] = useState("");
  const [volume, setVolume] = useState("");
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const languageInput = "es-PE";
  const [TextInputnombre, setNombre] = useState([]);
  const [TextInputdni, setDNI] = useState([]);
  const [TextInputgrupo_sangineo, setGruposangineo] = useState([]);
  const [TextInputaltura, setAltura] = useState([]);
  const [TextInputedad, setEdad] = useState([]);
  const [TextInputprocedencia, setProcedencia] = useState([]);
  const [Textantecedentes_familiares, setantecedentes_familiares] = useState([]);
  const [Textantecedentes_personales, setantecedentes_personales] = useState([]);
  const [Textdiagnosticos, setdiagnosticos] = useState([]);
  const [Textobservaciones, setobservaciones] = useState([]);
  const [Textpeso, setpeso] = useState([]);
  const [Textpresion_arterial, setpresion_arterial] = useState([]);
  const [Texttemperatura, settemperatura] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [Textestado_civil, setestado_civil] = useState([]);
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    fetch('https://api-nlp-pry20220112.herokuapp.com/spacy/', {
      method: 'POST',
      headers: {
           'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              texto: "Paciente con DNI 54746470 de nombre Guifre Meza Vilca de genero masculino de 74 años de edad nacido el domingo 10 de octubre del 2002 en el centro de salud  Hospital San José  con convivencia en Los olivos con grupo sanguineo de a positivo presenta una temperatura de  39 grados y mide  185.4 centimetros, el paciente llego con Secuelas de enfermedades infecciosas o parasitarias  y cuenta con una presion arterial de  98 Ademas, el paciente tiene un peso de  55 y presenta antecedentes de Consumo de drogas complementado a antecedentes familiares de  Drogas Por lo tanto se concluye el diagnostico de aumento del tamaño del sistema ventricular por hidrocefalia adquirida y como observaciones generales se receta  Cefuroxima 500 mg con 50 Tabletas con estado civil de casado"
            
            })
      })
    .then((response) => response.json()) // get response, convert to json
    .then((json) => {
      setNombre(json.nombre);
      setDNI(json.dni);
      setGruposangineo(json.grupo_sanguineo);
      setAltura(json.altura)
      setEdad(json.edad)
      setProcedencia(json.procedencia)
      setSexo(json.sexo)
      setantecedentes_familiares(json.antecedentes_familiares)
      setantecedentes_personales(json.antecedentes_personales)
      setdiagnosticos(json.diagnosticos)
      setobservaciones(json.observaciones)
      setpeso(json.peso)
      setpresion_arterial(json.presion_arterial)
      settemperatura(json.temperatura)
      setestado_civil(json.estado_civil)
    })
    .catch((error) => alert(error)) // display errors
    .finally(() => setLoading(false));

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log("onSpeechStart: ", e);
    setStarted("√");
  };

  const onSpeechRecognized = (e) => {
    console.log("onSpeechRecognized: ", e);
    setRecognized("√");
  };

  const onSpeechEnd = (e) => {
    console.log("onSpeechEnd: ", e);
    setEnd("√");
  };

  const onSpeechError = (e) => {
    console.log("onSpeechError: ", e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    console.log("onSpeechResults: ", e);
    const paciente = e.value;
    setResults(e.value);
  };

  const onSpeechPartialResults = (e) => {
    console.log("onSpeechPartialResults: ", e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e) => {
    console.log("onSpeechVolumeChanged: ", e);
    setVolume(e.value);
  };

  const _startRecognizing = async () => {
    _clearState();
    try {
      await Voice.start(languageInput);
      console.log("called start");

    } catch (e) {
      console.error(e);
    }
  };

  const _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    _clearState();
  };

  const _clearState = () => {
    setRecognized("");
    setVolume("");
    setError("");
    setEnd("");
    setStarted("");
    setResults([]);
    setPartialResults([]);
  };

  const handleSavePaciente = () => {
      set(ref(db, 'DatosPac/' +TextInputdni ),{
      altura:TextInputaltura,
      altura:TextInputaltura,
      antecedentes_familiares:Textantecedentes_familiares,
      antecedentes_personales:Textantecedentes_personales,
      diagnosticos:Textdiagnosticos,
      dni:TextInputdni,
      edad:TextInputedad,
      estado_civil:Textestado_civil,
      grupo_sanguineo:TextInputgrupo_sangineo,
      nombre:TextInputnombre,
      observaciones:Textobservaciones,
      peso:Textpeso,
      presion_arterial:Textpresion_arterial,
      procedencia:TextInputprocedencia,
      sexo:sexo,
      temperatura:Texttemperatura,
    })
  };

  return (
    <View style={styles.dictado}>
      <View style={styles.textAreaContainer0}>
        <Text style={styles.textArea0} underlineColorAndroid="transparent">
          {results.length > 0 ? results[0] : "Texto dictado por el doctor"}
        </Text>
      </View>
      <TouchableHighlight onPress={_startRecognizing}>
        <Image
          style={styles.image_mic}
          source={require("../../assets/microphone.png")}
        />
      </TouchableHighlight>
      <View style={styles.row_buttons}>
    
    <TouchableOpacity style={styles.button}  onPress={handleSavePaciente}>
        <StyledText style={styles.text}>Registrar</StyledText>
      </TouchableOpacity>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
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
    width: 110,
    height: 110,
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
  text: {
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

export default VoiceToText;
