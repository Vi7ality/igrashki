export interface IToyForm {
  toyName: string;
  description: string;
  manufacturer: string;
  ageFrom: number;
  ageTo?: number;
  category: string;
  images: File[] | string[];
  imagesToDelete?: string[];
  _id?: string;
  features: string[] | [];
}
