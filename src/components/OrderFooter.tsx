import React, {FC} from 'react';
import {Button} from 'antd';
import {Footer} from 'antd/es/layout/layout';
import {useDispatch} from "react-redux";
import {OrderActionCreator} from "../store/reducers/order/actionCreator";


interface Props {
    price: number;
}

const OrderFooter: FC<Props> = ({price}) => {
    const dispatch = useDispatch();

    const removeAll = () => {
        dispatch(OrderActionCreator.remoAllOrder())
    }

    return (
        <Footer className='listItem' >
            <div>
                <Button onClick={removeAll}>Remove all</Button>
            </div>
            <div className='listItem' style={{width: '20vw'}}>
                <h1 style={{fontSize: 24}}>{price.toFixed(2)} Br</h1>
                <Button type='primary'>Go to Order</Button>
            </div>
        </Footer>
    );
};

export default OrderFooter;