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
    SignInData,
    SignUpData,
    SetSignOutAction
} from "./types";
import {UserModel} from "../../../models/user/UserModel";
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
    exit: (): SetSignOutAction => ({
        type: AuthActionEnum.SIGN_OUT
    }),

    signIn: (data: SignInData) => async (dispatch: AppDispatch) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            dispatch(AuthActionCreator.setIsAuth(true));
            dispatch(AuthActionCreator.setIsLoading(false))
        } catch (e) {
            console.log("Error in loginAction in sign in =>  ", e)
            dispatch(AuthActionCreator.setError(`${e}`));
            dispatch(AuthActionCreator.setIsLoading(false));
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
                dispatch(AuthActionCreator.setUser(newUser));
                dispatch(AuthActionCreator.setIsLoading(false));
            }
            dispatch(AuthActionCreator.setIsLoading(false));
        } catch (e) {
            console.log("Error in loginAction in sign up =>  ", e)
            dispatch(AuthActionCreator.setError(`${e}`));
            dispatch(AuthActionCreator.setIsLoading(false));
        }
    },

    getUserById: (id: string) => async (dispatch: AppDispatch) => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get();
            if (user) {
                const userData = user.data() as UserModel;
                dispatch(AuthActionCreator.setIsAuth(true));
                dispatch(AuthActionCreator.setUser(userData));
            }
        } catch (e) {
            console.log("Error in loginAction in get user by id =>  ", e)
        }
    },

    signOut: () => async (dispatch: AppDispatch) => {
        try {

            dispatch(AuthActionCreator.exit());
            await firebase.auth().signOut();
        } catch (e) {
            console.log("Error in loginAction in log out =>  ", e)
            dispatch(AuthActionCreator.setIsLoading(false));
        }
    }

}