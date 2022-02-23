import {MenuItemModel} from "../../../models/menu/MenuItemModel";

export enum OrderActionEnum {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export interface OrderState {
    orderList: MenuItemModel[]
}

//Actions

export interface AddItemToOrder {
    type: OrderActionEnum.ADD_ITEM;
    payload: MenuItemModel[];
}

export interface RemoveItemFromOrder {
    type:OrderActionEnum.REMOVE_ITEM;
    payload: MenuItemModel[];
}

export interface ConfirmOrder {
    type: OrderActionEnum.CONFIRM_ORDER
}


export type OrderAction =
    AddItemToOrder |
    RemoveItemFromOrder |
    ConfirmOrder