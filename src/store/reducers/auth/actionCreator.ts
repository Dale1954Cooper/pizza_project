import {AuthActionEnum, SetAuthAction, SetUserAction} from "./types";
import {UserModel} from "../../../models/UserModel";

export const AuthActionCreator = {
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    setUser: (user: UserModel): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    })
}