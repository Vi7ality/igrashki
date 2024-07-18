import * as Yup from 'yup';

export const newToyValidationSchema = Yup.object({
  toyName: Yup.string().required("Це поле обов'язкове"),
  description: Yup.string().required("Це поле обов'язкове"),
  manufacturer: Yup.string().required("Це поле обов'язкове"),
  ageFrom: Yup.number().required("Це поле обов'язкове"),
  ageTo: Yup.number(),
  category: Yup.string().required("Це поле обов'язкове"),
});
