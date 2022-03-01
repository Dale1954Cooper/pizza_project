import React, {FC} from 'react';
import {Layout} from 'antd';

import OrderList from '../components/OrderList';


const OrderPage: FC = () => {
    return (
        <Layout>
            <OrderList/>
        </Layout>
    );
};

export default OrderPage;