import React, {FC, useState} from 'react';
import {Layout} from 'antd';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {MenuItemModel} from '../models/menu/MenuItemModel';
import MenuItem from './MenuItem';
import ItemCard from './ItemCard';

const {Content} = Layout


const MenuContent: FC = () => {
    const {currentMenuList, isCardVisible, cardContent} = useTypedSelector(state => state.menuReducer)

    return (
        <Content className='container'>
            {isCardVisible && <ItemCard item={cardContent}/>}
            <div className='row'>
                {currentMenuList.map((item, index) =>
                    <MenuItem
                        key={index}
                        item={item}
                    />
                )}
            </div>
        </Content>
    );
};

export default MenuContent;