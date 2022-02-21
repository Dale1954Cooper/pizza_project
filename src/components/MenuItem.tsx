import React, {FC} from 'react';
import {Card} from "antd";
import {MenuItemModel} from "../models/menu/MenuItemModel";


const MenuItem: FC<MenuItemModel> = (item) => {
    const {name, img, tags, description, dimension, sizePrise} = item

    return (
        <Card title={name} className='item'>


        </Card>
    );
};

export default MenuItem;