import {MenuItemModel} from "./MenuItemModel";

export interface MenuListModel {
    name: string;
    items: MenuItemModel[];
    isLoaded: boolean;
}
