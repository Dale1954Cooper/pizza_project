import {UserModel} from "../../../models/UserModel";

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
}

export interface AuthState {
    isAuth: boolean;
    user: UserModel;
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: UserModel
}


export type AuthAction =
    SetAuthAction |
    SetUserAction