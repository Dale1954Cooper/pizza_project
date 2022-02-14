import {UserDataModel} from "./UserDataModel";

export interface UserModel {
    id: string;
    firstName: string;
    email: string;
    password: string;
    userData?: UserDataModel;
}