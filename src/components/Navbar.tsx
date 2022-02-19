import React, {FC, FormEvent} from 'react';
import {Layout, Menu, Row} from "antd";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";

import {useTypedSelector} from '../hooks/useTypedSelector';
import {RoutesNames} from "../routes/routes";
import {AuthActionCreator} from "../store/reducers/auth/actionCreator";


const Navbar: FC = () => {
    const {isAuth, isAdmin} = useTypedSelector(state => state.authReducer);
    const history = useHistory();
    const dispatch = useDispatch();


    function signOutHandler(e: FormEvent) {
        e.preventDefault();
        dispatch(AuthActionCreator.setIsLoading(true));
        dispatch(AuthActionCreator.signOut())
    }

    return (
        <Layout.Header>

                {!isAuth ?
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item key={1} onClick={() => history.push(RoutesNames.SIGN_IN)}>
                            Sign In
                        </Menu.Item>
                        <Menu.Item key={2} onClick={() => history.push(RoutesNames.SIGN_UP)}>
                            Sign Up
                        </Menu.Item>
                        <Menu.Item key={3} onClick={() => history.push(RoutesNames.MENU)}>
                            Menu
                        </Menu.Item>
                    </Menu>
                    :
                    !isAdmin ?
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item key={4} onClick={() => history.push(RoutesNames.MENU)}>
                                Menu
                            </Menu.Item>
                            <Menu.Item key={5} onClick={() => history.push(RoutesNames.USER_PAGE)}>
                                User page
                            </Menu.Item>
                            <Menu.Item key={6} onClick={(e) => signOutHandler(e.domEvent)}>
                                Logout
                            </Menu.Item>
                        </Menu>
                        :
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item key={7} onClick={() => history.push(RoutesNames.MENU)}>
                                Menu
                            </Menu.Item>
                            <Menu.Item key={8} onClick={() => history.push(RoutesNames.USER_PAGE)}>
                                User page
                            </Menu.Item>
                            <Menu.Item key={9} onClick={() => history.push(RoutesNames.MANAGER_PAGE)}>
                                Manager page
                            </Menu.Item>
                            <Menu.Item key={10} onClick={() => signOutHandler}>
                                Logout
                            </Menu.Item>
                        </Menu>
                }

        </Layout.Header>
    );
};

export default Navbar;