import * as Yup from 'yup';

interface ValidFileExtensions {
  [key: string]: string[];
}

const validFileExtensions: ValidFileExtensions = {
  image: ['jpg'],
};

export function getAllowedExt(type: string) {
  return validFileExtensions[type].map(e => `.${e}`).toString();
}

const MAX_FILE_SIZE = 8e6;

function isValidFileType(fileName: string, fileType: string): boolean {
  const extensions = validFileExtensions[fileType];

  if (!extensions) {
    console.warn(`File type ${fileType} is not valid.`);
    return false;
  }

  const fileExtension = fileName.split('.').pop();

  return fileExtension ? extensions.indexOf(fileExtension) > -1 : false;
}

export const newToyValidationSchema = Yup.object({
  toyName: Yup.string().required("Це поле обов'язкове"),
  description: Yup.string().required("Це поле обов'язкове"),
  manufacturer: Yup.string().required("Це поле обов'язкове"),
  ageFrom: Yup.number().required("Це поле обов'язкове"),
  ageTo: Yup.number(),
  category: Yup.string().required("Це поле обов'язкове"),
  image: Yup.mixed()
    .test('is-valid-type', 'Недійсний тип зображення', value => {
      if (!value) return true;
      return isValidFileType((value as File).name.toLowerCase(), 'image');
    })
    .test('is-valid-size', 'Максимальний розмір файлу — 8MB', value => {
      if (!value) return true;
      return (value as File).size <= MAX_FILE_SIZE;
    }),
});
