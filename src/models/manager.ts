export interface IManagerCredentials {
    managerUserName: string;
    managerPassword: string;
}

export interface IManager extends Partial<IManagerCredentials> {
    _id: string;
    pointName: string;
    location: string;
    city: string;
}

