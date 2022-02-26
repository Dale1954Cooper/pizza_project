import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Card, Image} from 'antd';

import {useTypedSelector} from '../hooks/useTypedSelector';
import {OrderActionCreator} from '../store/reducers/order/actionCreator';
import {MenuItemModel} from '../models/menu/MenuItemModel';
import {MenuItemInOrderModel} from '../models/menu/MenuItemInOrderModel';
import Tags from './Tags';
import SizePriceComplex from './SizePriceComplex';
import {MenuActionCreator} from "../store/reducers/menu/actionCreator";


interface Props {
    item: MenuItemModel,
}

const MenuItem: FC<Props> = ({item}) => {
    const {name, img, tags, dimension, sizePrise} = item

    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {orderList} = useTypedSelector(state => state.orderReducer)
    const dispatch = useDispatch();
    const [sizePriseToOrder, setSizePriseToOrder] = useState(sizePrise[0])

    const addToOrder = () => {
        const newOrderItem: MenuItemInOrderModel = {
            name: name,
            dimension: dimension,
            sizePrise: sizePriseToOrder,
        }
        dispatch(OrderActionCreator.addItemToOrder(orderList, newOrderItem));
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
                        sizePrice={sizePrise}
                        dimension={dimension}
                        setSizePriseToOrder={setSizePriseToOrder}
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