import {Interface} from "readline";
import {UserModel} from "../../../models/UserModel";
import {UserDataModel} from "../../../models/UserDataModel";

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ADMIN = 'SET_ADMIN',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    NEED_VERIFICATION = 'NEED_VERIFICATION',
    SET_SUCCESS = 'SET_SUCCESS',
    SIGN_OUT = 'SIGN_OUT',

}

export interface AuthState {
    isAuth: boolean;
    isAdmin: boolean;
    user: UserModel;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string;
    needVerification: boolean;
    setSuccess: string;
}

export interface SignUpData {
    firstName: string;
    email: string;
    password: string;
}

export interface SignInData {
    email: string;
    password: string;
}

//Actions

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

export interface SetNeedVerificationAction {
    type: AuthActionEnum.NEED_VERIFICATION;
    payload: boolean;
}

export interface SetSuccessAction {
    type: AuthActionEnum.SET_SUCCESS;
    payload: string;
}

interface SetSignOutAction {
    type: AuthActionEnum.SIGN_OUT
}


export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetAdminAction |
    SetIsLoadingAction |
    SetErrorAction |
    SetNeedVerificationAction |
    SetSuccessAction |
    SetSignOutAction