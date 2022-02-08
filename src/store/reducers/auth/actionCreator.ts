import {UserModel} from "../../../models/UserModel";
import {AppDispatch} from "../../store";
import {
    AuthActionEnum,
    SetAdminAction,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from "./types";
import axios from "axios";


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

    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreator.setIsLoading(true));
            const res = await axios.get<UserModel[]>('./users.json')
            const mockUser = res.data.find(user =>
                user.email === email &&
                user.password === password
            )
            if (mockUser) {
                dispatch(AuthActionCreator.setUser(mockUser))
                dispatch(AuthActionCreator.setIsAuth(true))
                if (mockUser.id.slice(-6) === '_admin') {
                    dispatch(AuthActionCreator.setIsAdmin(true));
                }
            } else {
                dispatch(AuthActionCreator.setError('Invalid username or password'))
            }
            dispatch(AuthActionCreator.setIsLoading(false))
        } catch (e) {
            console.log("Error in loginAction in auth =>  ", e)
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreator.setUser({} as UserModel));
        dispatch(AuthActionCreator.setIsAdmin(false));
        dispatch(AuthActionCreator.setIsAuth(false));
    }

}