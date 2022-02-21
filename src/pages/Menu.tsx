import React, {FC} from 'react';
import {Layout} from "antd";

import MenuSider from "../components/MenuSider";
import MenuContent from "../components/MenuContent";

const Menu: FC = () => {
    return (
        <Layout className='fullScreen'>
            <MenuSider/>
            <Layout className='site-layout'>
                <MenuContent/>
            </Layout>
        </Layout>
    );
};

export default Menu;