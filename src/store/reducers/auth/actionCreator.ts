import axios from "axios";

import {AppDispatch} from "../../store";
import {
    AuthActionEnum,
    SetAdminAction,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetNeedVerificationAction,
    SetUserAction,
    SignUpData
} from "./types";
import {UserModel} from "../../../models/UserModel";
import {UserDataModel} from "../../../models/UserDataModel";
import firebase from "../../../firebase";


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
    setNeedVerification: (payload: boolean): SetNeedVerificationAction => ({
        type: AuthActionEnum.NEED_VERIFICATION,
        payload
    }),

    signIn: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreator.setIsLoading(true));
            const res = await axios.get<UserModel[]>('./users.json')
            const mockUser = res.data.find(user =>
                    user.email === email
                // user.password === password
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
            console.log("Error in loginAction in login =>  ", e)
        }
    },

    signUp: (data: SignUpData) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreator.setIsLoading(true));
            const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            if (res.user) {
                const newUser: UserModel = {
                    email: data.email,
                    firstName: data.firstName,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                }
                await firebase.firestore().collection('/users').doc(res.user.uid).set(newUser)
                await res.user.sendEmailVerification()
                dispatch(AuthActionCreator.setNeedVerification(true));
                dispatch(AuthActionCreator.setIsAuth(true));
                dispatch(AuthActionCreator.setUser(newUser));
            }
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            console.log("Error in loginAction in sign up =>  ", e)
            dispatch(AuthActionCreator.setError(`${e}`));
        }
    },

    getUserById: (id: string) => async (dispatch: AppDispatch) => {
      try {
          const user = await firebase.firestore().collection('users').doc(id).get();
          if (user.exists) {
              const userData = user.data() as UserModel;
              dispatch(AuthActionCreator.setUser(userData));
              dispatch(AuthActionCreator.setIsAuth(true));
          }
      }  catch (e) {
          console.log("Error in loginAction in get user by id =>  ", e)
      }
    },

    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreator.setUser({} as UserModel));
        dispatch(AuthActionCreator.setIsAdmin(false));
        dispatch(AuthActionCreator.setIsAuth(false));
    }

}