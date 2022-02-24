import {FoodDimensionEnum} from "./FoodDimensionEnum";
import {SizePriceModel} from "./SizePriseModel";


export interface MenuItemInOrderModel {
    name: string;
    dimension: FoodDimensionEnum;
    sizePrise: SizePriceModel;
}