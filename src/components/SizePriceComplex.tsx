import React, {FC, useState} from 'react';
import {Select} from 'antd';

import {SizePriceModel} from '../models/menu/SizePriseModel';
import {FoodDimensionEnum} from '../models/menu/FoodDimensionEnum';

const {Option} = Select


interface Props {
    sizePrice: SizePriceModel[]
    dimension: FoodDimensionEnum
    setSizePriseToOrder: (set: SizePriceModel) => void
}

const SizePriceComplex: FC<Props> = ({
                                         sizePrice,
                                         dimension,
                                         setSizePriseToOrder
                                     }) => {
    const [price, setPrice] = useState(sizePrice[0].price)

    const handleChange = (size: number) => {
        const el = sizePrice.find(i => i.size === size)
        if (el) {
            setSizePriseToOrder(el)
            setPrice(el.price)
        }
    }

    return (
        <>
            <Select
                defaultValue={sizePrice[0].size}
                onChange={handleChange}
            >
                {sizePrice.map(item =>
                    <Option
                        key={item.size}
                        value={item.size}
                    >
                        {item.size} {dimension}
                    </Option>
                )}
            </Select>
            <h2 style={{left: 30}}>{price}Br</h2>
        </>
    );
};

export default SizePriceComplex;