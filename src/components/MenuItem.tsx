import React, {FC, useState} from 'react';
import {Button, Card, Image, Select, Tag} from "antd";
const {Option} = Select

import {MenuItemModel} from "../models/menu/MenuItemModel";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {MenuItemInOrderModel} from "../models/menu/MenuItemInOrderModel";
import {useDispatch} from "react-redux";
import {OrderActionCreator} from '../store/reducers/order/actionCreator';


const MenuItem: FC<MenuItemModel> = (item) => {
    const {name, img, tags, description, dimension, sizePrise} = item
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {orderList} = useTypedSelector(state => state.orderReducer)
    const dispatch = useDispatch();
    const [sizePriseToOrder, setSizePriseToOrder] = useState(sizePrise[0])
    const [price, setPrice] = useState(sizePrise[0].price)

    const addToOrder = () => {
        const newOrderItem: MenuItemInOrderModel = {
            name: name,
            dimension: dimension,
            sizePrise: sizePriseToOrder,
        }
        dispatch(OrderActionCreator.addItemToOrder(orderList, newOrderItem));
    }

    const handleChange = (size: number) => {
        const el = sizePrise.find(i => i.size === size)
        if (el) {
            setSizePriseToOrder(el)
            setPrice(el.price)
        }
    }

    return (
        <Card title={name} className='item' extra={<Button>More</Button>}>
            <div className='item__content'>
                <Image width={'100%'} height={250} src={`${img}`} alt={name}/>

                <div className='item__content-elem' style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Select
                        defaultValue={sizePrise[0].size}
                        onChange={handleChange}
                    >
                        {sizePrise.map(item =>
                            <Option
                                key={item.size}
                                value={item.size}
                            >
                                {item.size} {dimension}
                            </Option>
                        )}
                    </Select>
                    <h2 style={{left: 30}}>{price}Br</h2>
                </div>

                <div className='item__content-elem'>
                    {tags?.map(tag =>
                        <Tag key={tag}>{tag}</Tag>
                    )}

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