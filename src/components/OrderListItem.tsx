import React, {FC} from 'react';
import {Button, List} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';


interface Props {
    item: MenuItemInOrderModel
    fun: (item: MenuItemInOrderModel) => void
}

const OrderListItem: FC<Props> = ({item, fun}) => {
    const {name, size, dimension, price, count} = item

    const deleteItem = () => {
        fun(item);
    }

    return (
        <List.Item className='listItem'>
            <div className='listItem-container'>
                <h2>{name}</h2>
                <h2>{size} {dimension}</h2>
                <h2>{count}</h2>
                <h2>{price} Br</h2>
            </div>
            <div className='listItem-container center'>
                <Button icon={<CloseOutlined/>} onClick={deleteItem}/>
            </div>
        </List.Item>
    );
};

export default OrderListItem;