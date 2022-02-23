import React, {FC} from 'react';
import {Button, Card, Image, Tag} from "antd";
import {MenuItemModel} from "../models/menu/MenuItemModel";
import SelectItemSize from "./SelectItemSize";
import {useTypedSelector} from "../hooks/useTypedSelector";


const MenuItem: FC<MenuItemModel> = (item) => {
    const {name, img, tags, description, dimension, sizePrise} = item
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        <Card title={name} className='item' extra={<Button>More</Button>}>
            <div className='item__content'>
                <Image width={200} height={250} src={`${img}`} alt={name}/>
                <div className='item__content-elem'>
                    <SelectItemSize sizePrise={sizePrise} dimension={dimension}/>
                </div>
                <div className='item__content-elem'>
                    {tags?.map(tag =>
                        <Tag key={tag}>{tag}</Tag>
                    )}
                </div>
            </div>
            <div className='item__contentBtn'>
                <div className='item__content-elem'>
                    <Button type="primary" disabled={!isAuth}>{isAuth ? 'Add to order' : 'Sign In'}</Button>
                </div>
            </div>
        </Card>
    )
        ;
};

export default MenuItem;