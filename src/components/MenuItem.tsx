import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Card, Image} from 'antd';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {OrderActionCreator} from '../store/reducers/order/actionCreator';
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";
import {MenuItemModel} from '../models/menu/MenuItemModel';
import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';
import Tags from './Tags';
import SizePriceComplex from './SizePriceComplex';


interface Props {
    item: MenuItemModel,
}

const MenuItem: FC<Props> = ({item}) => {
    const {name, img, tags, dimension, sizePrice} = item

    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {orderList} = useTypedSelector(state => state.orderReducer)
    const dispatch = useDispatch();
    const [sizePriceToOrder, setSizePriceToOrder] = useState(sizePrice[0])

    const addToOrder = () => {
        const newOrderItem: MenuItemInOrderModel = {
            name: name,
            dimension: dimension,
            size: sizePriceToOrder.size,
            price: sizePriceToOrder.price,
            count: 1,
        }
        dispatch(OrderActionCreator.addItemToOrder(orderList, newOrderItem));
        dispatch(OrderActionCreator.calculateTotalPrice(orderList));
    }

    const handleMore = () => {
        dispatch(MenuActionCreator.showItemCard(item))
    }

    return (
        <Card title={name}
              className='item'
              extra={<Button onClick={handleMore}>More</Button>}
        >
            <div className='item__content'>
                <Image width={'100%'} height={250} src={`${img}`} alt={name}/>

                <div className='item__content-elem' style={{display: 'flex', justifyContent: 'space-around'}}>
                    <SizePriceComplex
                        sizePrice={sizePrice}
                        dimension={dimension}
                        setSizePriseToOrder={setSizePriceToOrder}
                    />
                </div>

                <div className='item__content-elem'>
                    {tags ? <Tags tags={tags}/> : null}
                </div>
            </div>
            <div className='item__contentBtn'>
                <div className='item__content-elem'>
                    <Button
                        type="primary"
                        disabled={!isAuth}
                        onClick={addToOrder}
                    >
                        {isAuth ? 'Add to order' : 'Sign In'}
                    </Button>
                </div>
            </div>
        </Card>
    )
        ;
};

export default MenuItem;