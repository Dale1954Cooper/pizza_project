import React, {FC} from 'react';
import {Select} from "antd";
import {SizePriceModel} from "../models/menu/SizePriseModel";
import {FoodDimensionEnum} from "../models/menu/FoodDimensionEnum";

const {Option} = Select;

interface Props {
    sizePrise: SizePriceModel[];
    dimension: FoodDimensionEnum
}

const SelectItemSize: FC<Props> = ({sizePrise, dimension}) => {

    return (
        <Select defaultValue={`${sizePrise[0].size}${dimension} for ${sizePrise[0].price}`}>
            {sizePrise.map((item, index) =>
                <Option
                    value={`${item.size}${dimension} for ${item.price}`}
                    key={index}
                >
                    {item.size}{dimension} for {item.price}
                </Option>
            )}
        </Select>
    );
};

export default SelectItemSize;