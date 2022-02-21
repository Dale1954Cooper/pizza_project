import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Layout, Menu} from 'antd';
import Sider from "antd/es/layout/Sider";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";
import {MenuItemModel} from "../models/menu/MenuItemModel";
import {MenuListModel} from "../models/menu/MenuListModel";


const MenuSider: FC = () => {
    const {menuList, menu} = useTypedSelector(state => state.menuReducer);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MenuActionCreator.loadMenuList())
    }, [])

    useEffect(() => {
        dispatch(MenuActionCreator.setCurrentListName(menuList[0]))
    }, [menuList])

    const setCurrentListData = (name: string) => {
        dispatch(MenuActionCreator.setCurrentListName(name))
        let tempObj = menu.find(e => e.name === name)
        if(tempObj) {
            dispatch(MenuActionCreator.setCurrentMenuList(tempObj.items))
        } else {

        }
    }

    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(!isCollapsed)}>
            <div className='logo'/>
            <Menu theme='dark' mode="inline" defaultSelectedKeys={['0']}>
                {menuList.map((item, index) =>
                    <Menu.Item
                        key={index}
                        onClick={() => setCurrentListData(item)}
                    >
                        {item}
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    );

};

export default MenuSider;