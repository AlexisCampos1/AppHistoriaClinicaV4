import axios from "axios";
import { API_IA_MIKASA_URL } from "@env";

const headers = {
  "Content-Type": "application/json",
};

export const exists_CMP = (json_data) => {
  return axios
    .post(`${API_IA_MIKASA_URL}/cmp`, json_data, {
      headers: headers,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
