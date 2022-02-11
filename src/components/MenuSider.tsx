import React, {FC, useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import Sider from "antd/es/layout/Sider";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const MenuSider: FC = () => {
    const {listNames, lists} = useTypedSelector(state => state.menuReducer)
    const {loadMenuListName, loadMenuList} = useActions();
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        loadMenuListName()
    }, [])

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    const handleClick = (name: string) => {
        loadMenuList(name, `./${name}.json`);
    }

    return (
        <Layout>
            <Sider collapsible collapsed={isCollapsed} onCollapse={() => toggleCollapse()}>
                <div className='logo'/>
                <Menu theme='dark' mode="inline" defaultSelectedKeys={['0']}>
                    {listNames.map((item, index) =>
                        <Menu.Item key={index} onClick={() => handleClick(item)}>
                            {item}
                        </Menu.Item>
                    )}
                    <Menu.Item key={4} onClick={() => console.log(lists)}>
                        Show
                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    );
};

export default MenuSider;