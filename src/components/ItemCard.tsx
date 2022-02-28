import React, {FC, useState} from 'react';
import {Image, message, Modal} from 'antd';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {OrderActionCreator} from '../store/reducers/order/actionCreator';
import {MenuItemModel} from '../models/menu/MenuItemModel';
import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';
import SizePriceComplex from "./SizePriceComplex";
import Tags from "./Tags";
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";


interface Props {
    item: MenuItemModel
}

const ItemCard: FC<Props> = ({item}) => {
    const {name, img, tags, description, dimension, sizePrice} = item
    const dispatch = useDispatch()
    const {orderList} = useTypedSelector(state => state.orderReducer)
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {isCardVisible} = useTypedSelector(state => state.menuReducer)
    const [sizePriseToOrder, setSizePriceToOrder] = useState(sizePrice[0])

    const handleCancel = () => {
        dispatch(MenuActionCreator.hideItemCard())
    }

    const handleOk = () => {
        if (isAuth) {
            const newOrderItem: MenuItemInOrderModel = {
                name: name,
                dimension: dimension,
                sizePrice: sizePriseToOrder,
                count: 1,
            }
            dispatch(OrderActionCreator.addItemToOrder(orderList, newOrderItem));
        } else {
            handleCancel();
            message.warning("First, log in to your account or register",5);
        }
    }


    return (
        <Modal
            title={name}
            visible={isCardVisible}
            onCancel={handleCancel}
            okText={'Add to Order'}
            onOk={handleOk}
        >
            <p>{description}</p>
            <div className='item__content-elem'>
                <Image
                    width={'100%'}
                    height={260}
                    src={`${img}`}
                    alt={name}
                    style={{paddingLeft: 100, paddingRight: 100}}
                />
            </div>

            {tags ? <Tags tags={tags}/> : null}

            <div className='item__content-elem' style={{display: 'flex', justifyContent: 'space-around'}}>
                <SizePriceComplex
                    sizePrice={sizePrice}
                    dimension={dimension}
                    setSizePriseToOrder={setSizePriceToOrder}
                />
            </div>

        </Modal>
    );
};

export default ItemCard;