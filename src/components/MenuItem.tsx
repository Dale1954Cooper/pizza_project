import React, {FC} from 'react';
import {Card} from "antd";
import {MenuItemModel} from "../models/menu/MenuItemModel";


const MenuItem: FC<MenuItemModel> = (item) => {
    const {name, img, tags, description, dimension, sizePrise} = item

    return (
        <Card>
            <div className='menuItem-name'>{name}</div>
        </Card>
    );
};

export default MenuItem;