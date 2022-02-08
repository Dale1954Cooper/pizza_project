import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";

import {useTypedSelector} from '../hooks/useTypedSelector';
import {useHistory} from "react-router-dom";
import {RoutesNames} from "../routes/routes";
import {useActions} from "../hooks/useActions";


const Navbar: FC = () => {
    const {isAuth, isAdmin} = useTypedSelector(state => state.authReducer);
    const history = useHistory();
    const {logout} = useActions();

    return (
        <Layout.Header>
            <Row justify="end">
                {!isAuth ?
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item onClick={() => history.push(RoutesNames.LOGIN)}>
                            Login
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push(RoutesNames.REGISTRATION)}>
                            Registration
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push(RoutesNames.MENU)}>
                            Menu
                        </Menu.Item>
                    </Menu>
                    :
                    !isAdmin ?
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={() => history.push(RoutesNames.MENU)}>
                                Menu
                            </Menu.Item>
                            <Menu.Item onClick={() => history.push(RoutesNames.USER_PAGE)}>
                                User page
                            </Menu.Item>
                            <Menu.Item onClick={() => logout()}>
                                Logout
                            </Menu.Item>
                        </Menu>
                        :
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={() => history.push(RoutesNames.MENU)}>
                                Menu
                            </Menu.Item>
                            <Menu.Item onClick={() => history.push(RoutesNames.USER_PAGE)}>
                                User page
                            </Menu.Item>
                            <Menu.Item onClick={() => history.push(RoutesNames.MANAGER_PAGE)}>
                                Manager page
                            </Menu.Item>
                            <Menu.Item onClick={() => logout()}>
                                Logout
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;