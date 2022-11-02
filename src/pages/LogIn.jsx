import React, { Component } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button, Image } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { loginValidationScheme } from "../validationSchemas/login.js";
import FormikInputValue from "../components/FormikInputValue.jsx";
import SingIn from "../pages/SingIn.jsx";

const LogIn = ({navigation}) => {

  return (
    <Formik
      validationSchema={loginValidationScheme}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <Image
              style={styles.image}
              source={require("../../assets/logo.png")}
            />
            <FormikInputValue name="user" placeholder="Usuario" />
            <FormikInputValue
              name="password"
              placeholder="Contraseña"
              secureTextEntry
             />
            <View style={{ marginTop: 50 }}>
              <Button onPress={()=>{
                navigation.navigate('Home')
              }} title="Ingresar"
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <Button 
              onPress={()=>{
                navigation.navigate('Registrarse')
              }} title="Registrarse" />

            </View>

          </View>
        );
      }}
    </Formik>
  );
};

const initialValues = {
  user: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },

  form: {
    margin: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LogIn;
