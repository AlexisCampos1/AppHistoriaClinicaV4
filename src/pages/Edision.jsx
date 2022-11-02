import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import StyledText from "../components/StyledText.jsx";
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";
import { ref, set } from "firebase/database";
import { db } from "../components/config";

function Edision({navigation}) {
  const [recognized, setRecognized] = useState("");
  const [volume, setVolume] = useState("");
  const [error, setError] = useState("");
  const [end, setEnd] = useState("");
  const [started, setStarted] = useState("");
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const languageInput = "es-PE";
  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

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
    if (results[0]==undefined) {
      Alert.alert('MENSAJE DE ALERTA','Falta rellenar el reporte');
      return;
    }
    set(ref(db,'ReporteEdicion/',results),{
    ReporteEdicion:results[0],
  })
  navigation.navigate('Home')
};

  return (
    <View style={styles.dictado}>
      <View style={styles.textAreaContainer}>
        <Text style={styles.textArea} underlineColorAndroid="transparent">
          {results.length > 0 ? results[0] : ""}
        </Text>
      </View>
      <TouchableHighlight onPress={_startRecognizing}>
        <Image
          style={styles.image_mic}
          source={require("../../assets/microphone.png")}
        />
      </TouchableHighlight>
      <Text></Text>
      <View style={styles.row_buttons}>
        <TouchableOpacity style={styles.button}> 
        <StyledText style={styles.text} onPress = {handleSavePaciente}>Registrar</StyledText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate('Home')}}> 
            <StyledText style={styles.text}>Cancelar</StyledText>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  textArea: {
    height: 380,
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
    marginTop: 80,
  },
  row_buttons: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 30,
  },
  button: {
    margin: 15,
    backgroundColor: "#515152",
    textDecorationColor: "white",
    borderRadius: 10,
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
  },
});

export default Edision;