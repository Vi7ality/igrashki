import { IToyInfo } from "./toy";

export interface ISubscription {
  _id: string;
  clientId: string;
  managementPointId: string;
  toys: IToyInfo[];
  createdAt: string;
  subscribtionStartDate?: string;
  subscribtionEndDate?: string;
}

export interface IClientCredentials {
  phoneNumber: string;
  password: string;
}

export interface IClient extends IClientCredentials {
  _id: string;
  status: string;
  parentName: string;
  parentSurname: string;
  phoneNumber: string;
  childName: string;
  childBirthDate: string;
  dateCreated: string;
  toys: IToyInfo[];
  messenger: string;
  formType: string;
   startDate: string;
  endDate: string;
  subscription?: ISubscription;
  subscriptions?: ISubscription[];
}
