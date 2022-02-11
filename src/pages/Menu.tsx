import React, {FC} from 'react';
import {Layout} from "antd";

import MenuSider from "../components/MenuSider";

const Menu: FC = () => {
    return (
        <Layout className='fullScreen'>
            <MenuSider/>
        </Layout>
    );
};

export default Menu;