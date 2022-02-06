import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {UserModel} from "../../../models/UserModel";

const initialState: AuthState = {
    isAuth: false,
    user: {} as UserModel,
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}