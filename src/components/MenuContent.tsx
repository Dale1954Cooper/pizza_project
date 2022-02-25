import {Layout} from 'antd';
import React, {FC, useState} from 'react';
import MenuItem from "./MenuItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import ItemCard from "./ItemCard";
import {MenuItemModel} from "../models/menu/MenuItemModel";

const {Content} = Layout

const MenuContent: FC = () => {
    const {currentMenuList} = useTypedSelector(state => state.menuReducer)
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [cardContent, setCardContent] = useState({} as MenuItemModel)

    return (
        <Content className='container'>
            <ItemCard
                item={cardContent}
                isVisible={isCardVisible}
                setIsVisible={setIsCardVisible}
            />
            <div className='row'>
                {currentMenuList.map((item,index) =>
                    <MenuItem
                        key={index}
                        item={item}
                        setIsVisible={setIsCardVisible}
                        setCardContent={setCardContent}
                    />
                )}
            </div>
        </Content>
    );
};

export default MenuContent;