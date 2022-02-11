import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {UserModel} from "../../../models/UserModel";


const initialState: AuthState = {
    isAuth: false,
    isAdmin: false,
    user: {} as UserModel,
    isLoading: false,
    error: '',
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_ADMIN:
            return {...state, isAdmin: action.payload, isLoading: false}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, isAuth: false}
        default:
            return state
    }
}