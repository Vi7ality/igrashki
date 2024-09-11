import { IToyForm } from '../../models/toyForm';

export const createNewToyFormData = (
  values: IToyForm,
  features: string[],
  imagesToDelete?: string[]
) => {
  const formDataToSend = new FormData();
  const { toyName, ageFrom, manufacturer, ageTo, description, category } =
    values;
  formDataToSend.append('toyName', toyName);
  formDataToSend.append('manufacturer', manufacturer);
  formDataToSend.append('ageFrom', ageFrom);
  values.ageTo && formDataToSend.append('ageTo', ageTo);
  formDataToSend.append('description', description);
  formDataToSend.append('category', category);

  features.length > 0 &&
    features.forEach((feature: string, index: number) => {
      formDataToSend.append(`features[${index}]`, feature);
    });

  values.images &&
    values.images.forEach((image: File) => {
      formDataToSend.append('images', image);
    });
  imagesToDelete &&
    imagesToDelete.length > 0 &&
    imagesToDelete.forEach((image: string) => {
      formDataToSend.append('imagesToDelete', image);
    });

  return formDataToSend;
};
