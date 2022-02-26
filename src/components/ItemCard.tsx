import React, {FC} from 'react';
import {Modal} from 'antd';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {OrderActionCreator} from '../store/reducers/order/actionCreator';
import {MenuItemModel} from '../models/menu/MenuItemModel';
import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';


interface Props {
    item: MenuItemModel
    setIsVisible: (is: boolean) => void
    isVisible: boolean
}

const ItemCard: FC<Props> = ({
                                 item,
                                 setIsVisible,
                                 isVisible
                             }) => {
    const {name, img, tags, description, dimension, sizePrise} = item
    const dispatch = useDispatch()
    const {orderList} = useTypedSelector(state => state.orderReducer)

    const handleOk = () => {
        const newOrderItem: MenuItemInOrderModel = {
            name: name,
            dimension: dimension,
            sizePrise: sizePrise[0],
        }
        dispatch(OrderActionCreator.addItemToOrder(orderList, newOrderItem))
        setIsVisible(false)
    };

    return (
        <Modal
            title={name}
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            okText={'Add to Order'}
            onOk={handleOk}
        >

        </Modal>
    );
};

export default ItemCard;