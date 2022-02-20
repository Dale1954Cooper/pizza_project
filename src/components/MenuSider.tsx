import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Layout, Menu} from 'antd';
import Sider from "antd/es/layout/Sider";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";


const MenuSider: FC = () => {
    const {menuList} = useTypedSelector(state => state.menuReducer);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MenuActionCreator.loadMenuList())
    }, [])

    const loadMenuList = (name: string) => {
        console.log(name);
    }

    return (
        <Layout>
            <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(!isCollapsed)}>
                <div className='logo'/>
                {console.log(menuList)}
                <Menu theme='dark' mode="inline" defaultSelectedKeys={['0']}>
                    {menuList.map((item, index) =>
                        <Menu.Item key={index}>{item}</Menu.Item>
                    )}
                </Menu>
            </Sider>
        </Layout>
    );

};

export default MenuSider;