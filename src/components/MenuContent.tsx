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
    const {currentMenuList} = useTypedSelector(state => state.menuReducer)

    return (
        <Content style={{margin: '16px'}}>
            {currentMenuList.map(item =>
                <MenuItem
                    key={item.name}
                    name={item.name}
                    dimension={item.dimension}
                    sizePrise={item.sizePrise}
                />
            )}
        </Content>
    );
};

export default MenuContent;