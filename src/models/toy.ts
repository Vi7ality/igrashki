import { IClient } from './client';

export type ToyState =
  | 'Available'
  | 'InUse'
  | 'Disinfected'
  | 'Damaged'
  | 'Lost';

export interface IToy {
  _id: string;
  toyId: string;
  toyName: string;
  usageCycle: number;
  lastDisinfectionDate: Date;
  isAvailable: boolean;
  toyState: string;
  client?: IClient;
}

export interface IToyInfo {
  _id: string;
  toyId: string;
  toyName: string;
  images: string[];
  description: string;
  manufacturer: string;
  ageFrom: number;
  ageTo?: number;
  features: string[];
  category: string;
}
