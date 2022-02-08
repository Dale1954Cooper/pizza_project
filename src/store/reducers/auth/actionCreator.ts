import {
    AuthActionEnum,
    SetAdminAction,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from "./types";
import {UserModel} from "../../../models/UserModel";

export const AuthActionCreator = {
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    setIsAdmin: (admin: boolean): SetAdminAction => ({
        type: AuthActionEnum.SET_ADMIN,
        payload: admin
    }),
    setUser: (user: UserModel): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload
    }),


}