import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("Це поле обов'язкове")
    .min(19, "Веедіть корректний номер телефону"),
  password: Yup.string().required("Це поле обов'язкове"),
});

export const registerValidationSchema = Yup.object({
  parentSurname: Yup.string().required("Це поле обов'язкове"),
  parentName: Yup.string().required("Це поле обов'язкове"),
  phoneNumber: Yup.string()
    .required("Це поле обов'язкове")
    .min(19, "Веедіть корректний номер телефону"),
  childName: Yup.string().required("Це поле обов'язкове"),
  childBirthDate: Yup.date().required("Введіть дату народження дитини"),
  password: Yup.string()
    .required("Це поле обов'язкове")
    .min(6, "Пароль повинен бути більшим за 6 символів"),
});
