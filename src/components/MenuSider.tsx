import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Affix, Menu} from 'antd';
import Sider from 'antd/es/layout/Sider';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {MenuActionCreator} from '../store/reducers/menu/actionCreator';


const MenuSider: FC = () => {
    const {menuList, menu} = useTypedSelector(state => state.menuReducer);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const dispatch = useDispatch();
    const [menuName, setMenuName] = useState('')

    useEffect(() => {
        dispatch(MenuActionCreator.loadMenuNameList())
    }, []) // will load the menu list

    useEffect(() => {
        dispatch(MenuActionCreator.setCurrentListName(menuList[0]))
        dispatch(MenuActionCreator.loadMenuList(menuList[0], menu))
        setMenuName(menuList[0])
    }, [menuList]) // will load first menu items

    useEffect(() => {
        let tempObj = menu.find(e => e.name === menuName)
        if (tempObj) {
            dispatch(MenuActionCreator.setCurrentMenuList(tempObj.items))
        } else {
            //
        }
    }, [menu]) // will load current menu items

    const setCurrentListData = (name: string) => {
        dispatch(MenuActionCreator.setCurrentListName(name))
        let tempObj = menu.find(e => e.name === name)
        if (tempObj) {
            dispatch(MenuActionCreator.setCurrentMenuList(tempObj.items))
        } else {
            dispatch(MenuActionCreator.loadMenuList(name, menu))
        }
    }


    return (
        <Affix offsetTop={64} style={{zIndex: 10}}>
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
        </Affix>
    );

};

export default MenuSider;