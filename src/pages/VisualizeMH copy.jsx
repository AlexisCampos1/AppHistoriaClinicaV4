import React, { useEffect,useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  Button
} from "react-native";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue.jsx";
import StyledText from "../components/StyledText.jsx";
import { ref, get, child } from "firebase/database";
import { db} from "../components/config";

const VisualizeMH = ({ navigation }) => {
  const { textDni, setTextDni } = useState("");
  const [ listTasks , setListTasks] = useState([]);
  const [ DNI, setDNI] = useState([]);
  const dbRef = ref(db);

  useEffect(() => {
    let list = [];
    get(child(dbRef,`HistoriaDePacientes/${DNI}`)).then((snapshot) => {
    snapshot.forEach(
      document => {
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
            const obj = { Nombre, Antecedentes, Cuenta_SIS, DNI, Diagnostico, Edad, FechaNacimiento, Sexo, LugarNacimiento, Procedencia, Grupo_Sangineo, Saturacion, Temperatura, FecuenciaCardiaca, PresionArterial, ObsercacionGeneral }
            list.push(obj);
      })
      setListTasks(list)
      console.log(list)
  })
},[])




const Visualizar = () => {
  
}

  return (
    <>
      <View style={styles.header}>
        <StyledText style={styles.text}>Lista de Historias Clinicas</StyledText>
      </View>

      <View style={styles.body}>
        <Image style={styles.image} source={require("../../assets/minsa.png")} />
      </View>
      
      <Text> </Text>
      <Text> </Text>
      <View style={styles.dictado}>
      <View style={styles.textArea}>
        {listTasks.map((link)=>{
          return(
         <TouchableOpacity style={styles.cardView}onPress={()=>{
          navigation.navigate('HU',{dnipaciente:link.DNI});
        }}>
             <View style={{flexDirection:'column'}}> 
           <Text style={{textTransform: 'uppercase', color:'#000003'}} >
              {link.Nombre} - {link.DNI}</Text>  
          </View>
         </TouchableOpacity>);
        })}




        </View>
      </View>
    </>
  );
};
/* <FlatList
              data={listTasks}
              renderItem={renderTask} 
        /> */
const initialValues = {
  dni: "",
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 30,
    shadowColor: "#000003",
    marginHorizontal:8,
    marginVertical:5,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 9.75,
    shadowRadius: 3.84,
    elevation: 20
  },
  form: {
    margin: 12,
  },
  viewResult: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "60%",
  },
  textAreaContainer: {
    borderColor: "#1B5BB5",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  textArea: {
    height: 300,
    width: 380,
    justifyContent: "center",
    textAlignVertical: "top",
    padding: 5,
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
  dictado: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 10,
    width: "28%",
    justifyContent: "center",
  },
  text: {
    color: "white",
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
});

export default VisualizeMH;
