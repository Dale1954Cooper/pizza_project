import React, {FC, useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import Sider from "antd/es/layout/Sider";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const MenuSider: FC = () => {
    const {listNames} = useTypedSelector(state => state.menuReducer)
    const {loadMenuList} = useActions();
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        loadMenuList()
    },[])

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <Layout>
            <Sider collapsible collapsed={isCollapsed} onCollapse={() => toggleCollapse()}>
                <div className='logo'/>
                <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
                    {listNames.map((item, index) =>
                        <Menu.Item key={index}>
                            {item}
                        </Menu.Item>
                    )}
                </Menu>
            </Sider>
        </Layout>
    );
};

export default MenuSider;