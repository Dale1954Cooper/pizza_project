import React, {FC, useEffect} from 'react';
import {Layout} from "antd";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {AuthActionCreator} from "./store/reducers/auth/actionCreator";
import firebase from './firebase';


const App: FC = () => {
    const dispatch = useDispatch()
    const {authReducer, menuReducer} = useTypedSelector(state => state)
    //console.log(menuReducer)

    useEffect(() => {
        dispatch(AuthActionCreator.setIsLoading(true));
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                await dispatch(AuthActionCreator.getUserById(user.uid));
                if (!user.emailVerified) {
                    dispatch(AuthActionCreator.setNeedVerification(true))
                }
            }
            dispatch(AuthActionCreator.setIsLoading(false));
        });

        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRoutes/>
            </Layout.Content>
        </Layout>
    );
};

export default App;