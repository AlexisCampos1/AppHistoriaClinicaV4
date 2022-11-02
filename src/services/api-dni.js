import axios from "axios";
//import { API_DNI_URL, www.softwarelion.xyz/api/reniec/reniec-dni} from "@env";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNDg3LCJjb3JyZW8iOiJ0aGUubWF4d2VsbDg5QGdtYWlsLmNvbSIsImlhdCI6MTY2MjE1Nzg3N30.IZhKxvJHHVLeXpRfoE9cUKT2zqS58lFDHJ1IK6lJN1g'}`,
};

export const exists_DNI = (json_data) => {
  return axios
    .post(`${'https://www.softwarelion.xyz/api/reniec/reniec-dni'}`, json_data, {
      headers: headers,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
