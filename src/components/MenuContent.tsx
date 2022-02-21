import {Layout} from 'antd';
import React, {useEffect} from 'react';
import MenuItem from "./MenuItem";
import {useDispatch} from "react-redux";
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {MenuListModel} from "../models/menu/MenuListModel";
import {MenuItemModel} from "../models/menu/MenuItemModel";


const {Content} = Layout

const MenuContent = () => {
    const {menu} = useTypedSelector(state => state.menuReducer)
    const dispatch = useDispatch();
    const currentChoice = 'pizzas';

    useEffect(() => {
        dispatch(MenuActionCreator.getMoc('pizzas'))
    }, [])

    return (
        <Content style={{margin: '16px'}}>

        </Content>
    );
};

export default MenuContent;