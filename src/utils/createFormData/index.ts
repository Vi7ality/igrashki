import { IToyForm } from '../../models/toyForm';

export const createNewToyFormData = (values: IToyForm, features: string[]) => {
  const formDataToSend = new FormData();

  formDataToSend.append('toyName', values.toyName);
  formDataToSend.append('manufacturer', values.manufacturer);
  formDataToSend.append('ageFrom', values.ageFrom);
  values.ageTo && formDataToSend.append('ageTo', values.ageTo);
  formDataToSend.append('description', values.description);
  formDataToSend.append('category', values.category);

  features &&
    features.forEach((feature: string, index: number) => {
      formDataToSend.append(`features[${index}]`, feature);
    });

  values.images &&
    values.images.forEach((image: File) => {
      formDataToSend.append('images', image);
    });

  return formDataToSend;
};
