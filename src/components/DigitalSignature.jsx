import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";

import StyledText from "./StyledText.jsx";
import { Formik } from "formik";
import FormikInputValue from "../components/FormikInputValue.jsx";

const DigitalSignature = () => {
  const { textDni, setTextDni } = useState("");

  return (
    <>
      <View style={styles.tituloView}>
        <StyledText style={styles.titulo}>Consulte su DNI</StyledText>
      </View>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
              {/* Nombres */}
              <FormikInputValue
                style={styles.input}
                name="dni"
                placeholder="DNI"
                onChangeText={(text) => setTextDni({ text })}
                value={textDni}
              />
              <View style={styles.row_buttons}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <StyledText style={styles.text}>Registrar</StyledText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <StyledText style={styles.text}>Cancelar</StyledText>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </>
  );
};

const initialValues = {
  dni: "",
};

const styles = StyleSheet.create({
  tituloView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  titulo: {
    fontSize: 22,
  },
  row_buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
  },
  input: {
    width: "90%",
  },
  button: {
    margin: 7,
    backgroundColor: "#AEC0B6",
    textDecorationColor: "white",
    borderRadius: 15,
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
});

export default DigitalSignature;
