import {Layout} from 'antd';
import React, {FC} from 'react';
import MenuItem from "./MenuItem";
import {useTypedSelector} from "../hooks/useTypedSelector";

const {Content} = Layout

const MenuContent: FC = () => {
    const {currentMenuList} = useTypedSelector(state => state.menuReducer)
    return (
        <Content className='container'>
            <div className='row'>
                {currentMenuList.map(item =>
                    <MenuItem
                        key={item.name}
                        name={item.name}
                        img={item.img}
                        dimension={item.dimension}
                        sizePrise={item.sizePrise}
                        description={item.description}
                        tags={item.tags}
                    />
                )}
            </div>
        </Content>
    );
};

export default MenuContent;

/*

* */