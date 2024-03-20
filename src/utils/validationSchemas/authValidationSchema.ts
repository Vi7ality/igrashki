import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("Це поле обов'язкове")
    .min(19, "Веедіть корректний номер телефону"),
  password: Yup.string().required("Це поле обов'язкове"),
});