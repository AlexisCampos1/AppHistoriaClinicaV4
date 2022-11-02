import React, { useState, useEffect } from "react";
import { TouchableHighlight, View } from "react-native";
import StyledText from "../components/StyledText.jsx";
import axios from "axios";
import { API_IA_MIKASA_URL } from "@env";
const APITEST = () => {
  const [message, setMessage] = useState("");

  const getMessageAPI = () => {
    axios.get(`${API_IA_MIKASA_URL}`).then((response) => {
      const { data } = response;
      console.log(data);
      setMessage(data.mensaje);
    });
  };

  useEffect(() => {
    getMessageAPI();
  }, []);

  return (
    <View>
      <TouchableHighlight onPress={getMessageAPI}>
        <StyledText>enviar peticion a API</StyledText>
      </TouchableHighlight>
      <StyledText>El mensaje recibido es {message}</StyledText>
    </View>
  );
};

export default APITEST;
