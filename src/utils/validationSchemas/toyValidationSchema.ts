import * as Yup from 'yup';

const validFileExtensions = {
  image: ['jpg'],
};

export function getAllowedExt(type: string) {
  return validFileExtensions[type].map(e => `.${e}`).toString();
}

const MAX_FILE_SIZE = 8e6;
function isValidFileType(fileName: string, fileType: string) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

export const newToyValidationSchema = Yup.object({
  toyName: Yup.string().required("Це поле обов'язкове"),
  description: Yup.string().required("Це поле обов'язкове"),
  manufacturer: Yup.string().required("Це поле обов'язкове"),
  ageFrom: Yup.number().required("Це поле обов'язкове"),
  ageTo: Yup.number(),
  category: Yup.string().required("Це поле обов'язкове"),
  image: Yup.mixed()
    .test(
      'is-valid-type',
      'Недійсний тип зображення',
      value => !value || isValidFileType(value.name.toLowerCase(), 'image') // If no file, skip check
    )
    .test(
      'is-valid-size',
      'Максимальний розмір файлу — 8MB',
      value => !value || value.size <= MAX_FILE_SIZE // If no file, skip check
    ),
});
