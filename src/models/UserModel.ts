import {UserDataModel} from "./UserDataModel";

export interface UserModel {
    id: string;
    email: string;
    password: string;
    userData: UserDataModel;
}