import {UserModel} from "../../../models/UserModel";

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ADMIN = 'SET_ADMIN',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface AuthState {
    isAuth: boolean;
    isAdmin: boolean;
    user: UserModel;
    isLoading: boolean;
    error: string;
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: UserModel
}

export interface SetAdminAction {
    type: AuthActionEnum.SET_ADMIN;
    payload: boolean
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string
}


export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetAdminAction |
    SetIsLoadingAction |
    SetErrorAction