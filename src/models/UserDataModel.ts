import { GenderEnum } from "./GenderEnum";

export interface UserDataModel {
    name: string;
    userBirthdayDate?: Date;
    gender?: GenderEnum;
}