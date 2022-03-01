import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Layout, List} from 'antd';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {OrderActionCreator} from '../store/reducers/order/actionCreator';
import OrderListItem from './OrderListItem';
import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';
import OrderFooter from "./OrderFooter";


const OrderList: FC = () => {
    const {orderList, totalPrice} = useTypedSelector(state => state.orderReducer)
    const dispatch = useDispatch();

    const deleteItem = (item: MenuItemInOrderModel) => {
        dispatch(OrderActionCreator.removeItemFromOrder(orderList, item));
        dispatch(OrderActionCreator.calculateTotalPrice(orderList))
    }

    return (
        <Layout>
            <List
                footer={<OrderFooter price={totalPrice}/>}
            >
                {orderList.map((item, index) =>
                    <OrderListItem key={index} item={item} fun={deleteItem}/>
                )}
            </List>
        </Layout>
    );
};

export default OrderList;

