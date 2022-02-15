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
                        <Menu.Item key={1} onClick={() => history.push(RoutesNames.SIGN_IN)}>
                            Login
                        </Menu.Item>
                        <Menu.Item key={2} onClick={() => history.push(RoutesNames.SIGN_UP)}>
                            Registration
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
                            <Menu.Item key={6} onClick={() => logout()}>
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
                            <Menu.Item key={10} onClick={() => logout()}>
                                Logout
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;