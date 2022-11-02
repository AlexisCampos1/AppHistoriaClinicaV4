import React, { useRef } from "react";
import { Formik } from "formik";
import { ScrollView, StyleSheet, Button, Image, Text } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { singinValidationScheme } from "../validationSchemas/singin.js";
import FormikInputValue from "../components/FormikInputValue.jsx";


export const SingIn = ({navigation}) => {
  return (
    <Formik
      validationSchema={singinValidationScheme}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <ScrollView style={styles.form}>
            <Image
              style={styles.image}
              source={require("../../assets/logo.png")}
            />
            {/* Nombres */}
           <Text>Nombres</Text>
            <FormikInputValue name="nombres" placeholder="Nombres" />
            <Text>Apellidos</Text>
            <FormikInputValue name="apellidos" placeholder="Apellidos" />
            <Text>Contraseña</Text>
            <FormikInputValue
              name="password"
              placeholder="Contraseña"
              secureTextEntry
            />
            <Text>Confirmar Contraseña</Text>
            <FormikInputValue
              name="confirm_password"
              placeholder="Confirmar Contraseña"
              secureTextEntry
            />
            <Text>Correo electronico</Text>
            <FormikInputValue name="email" placeholder="Correo" />
            <Text>Codigo del Colegio medico del Perú</Text>
            <FormikInputValue
              name="codigo_doctor"
              placeholder="Codigo del doctor/enfermera"
            />
            <Text>DNI</Text>
            <FormikInputValue name="dni" placeholder="DNI" />
            <Text>Centro de salud</Text>
            <FormikInputValue
              name="centro_salud"
              placeholder="Centro de salud"
            />
            <Text>Ubicacion</Text>
            <FormikInputValue
              name="ubic_centro_salud"
              placeholder="Ubicacion de centro de salud"
            />
            <Button onPress={()=>{
                navigation.navigate('Incio')
              }} title="Registrar" />
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  nombres: "",
  apellidos: "",
  password: "",
  confirm_password: "",
  email: "",
  codigo_doctor: "",
  dni: "",
  centro_salud: "",
  ubic_centro_salud: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  image: {
    width:100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default SingIn;
