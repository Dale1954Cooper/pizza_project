import { FoodDimensionEnum } from "./FoodDimensionEnum";
import {SizePriceModel} from "./SizePriseModel";

export interface MenuItemModel {
    name: string;
    description?: string;
    img: string | File | HTMLImageElement;
    tags?: string[];
    dimension: FoodDimensionEnum;
    sizePrise: SizePriceModel[];
}