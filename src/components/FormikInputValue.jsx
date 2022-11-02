import React from "react";
import StyledTextInput from "./StyledTextInput.jsx";
import StyledText from "./StyledText.jsx";
import { useField } from "formik";
import { StyleSheet } from "react-native";

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
  },
});

export default FormikInputValue;
