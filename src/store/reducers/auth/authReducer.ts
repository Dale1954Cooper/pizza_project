import {AuthAction, AuthActionEnum, AuthState} from "./types";


const initialState: AuthState = {
    isAuth: false,
    user: null,
    isAdmin: false,
    isAuthenticated: false,
    isLoading: false,
    error: '',
    needVerification: false,
    setSuccess: '',
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_ADMIN:
            return {...state, isAdmin: action.payload, isLoading: false}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload, isAuthenticated: true}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AuthActionEnum.NEED_VERIFICATION:
            return {...state, needVerification: action.payload}
        case AuthActionEnum.SET_SUCCESS:
            return {...state, setSuccess: action.payload}
        case AuthActionEnum.SIGN_OUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isAdmin: false,
                isAuth: false,
                needVerification: false,
                isLoading: false,
            }
        default:
            return state
    }
}