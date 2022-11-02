import * as yup from "yup";

export const loginValidationScheme = yup.object().shape({
  user: yup.string().required("E-mail es requerido"),
  password: yup.string().required("Password es requerido"),
});
