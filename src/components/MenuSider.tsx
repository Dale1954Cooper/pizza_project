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
    const [menuName, setMenuName] = useState('')

    useEffect(() => {
        dispatch(MenuActionCreator.loadMenuList())
    }, []) // will load the menu list

    useEffect(() => {
        dispatch(MenuActionCreator.setCurrentListName(menuList[0]))
        dispatch(MenuActionCreator.getMoc(menuList[0], menu))
        setMenuName(menuList[0])
    }, [menuList]) // will load first menu items

    useEffect(() => {
        let tempObj = menu.find(e => e.name === menuName)
        if (tempObj) {
            dispatch(MenuActionCreator.setCurrentMenuList(tempObj.items))
        } else {
            //dispatch(MenuActionCreator.setError('ошибка загрузки меню'))
        }
    }, [menu]) // will load current menu items

    const setCurrentListData = (name: string) => {
        dispatch(MenuActionCreator.setCurrentListName(name))
        let tempObj = menu.find(e => e.name === name)
        if (tempObj) {
            dispatch(MenuActionCreator.setCurrentMenuList(tempObj.items))
        } else {
            dispatch(MenuActionCreator.getMoc(name, menu))
        }
    }


    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(!isCollapsed)}>
            <div className='logo'/>
            <Menu theme='dark' mode="inline" defaultSelectedKeys={['0']}>
                {menuList.map((item, index) =>
                    <Menu.Item
                        key={index}
                        onClick={() => {
                            setCurrentListData(item);
                            setMenuName(item)
                        }}
                    >
                        {item}
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    );

};

export default MenuSider;