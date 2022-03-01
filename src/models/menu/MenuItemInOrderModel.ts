import {FoodDimensionEnum} from "./FoodDimensionEnum";
import {SizePriceModel} from "./SizePriseModel";


export interface MenuItemInOrderModel {
    name: string;
    dimension: FoodDimensionEnum;
    size: number,
    price: number;
    count: number;
}