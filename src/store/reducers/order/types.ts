import {MenuItemInOrderModel} from "../../../models/menu/MenuItemInOrderModel";

export enum OrderActionEnum {
    SET_ORDER = 'SET_ORDER',
    CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export interface OrderState {
    orderList: MenuItemInOrderModel[]
}

//Actions

export interface SetOrder {
    type: OrderActionEnum.SET_ORDER;
    payload: MenuItemInOrderModel[]
}

export interface ConfirmOrder {
    type: OrderActionEnum.CONFIRM_ORDER
}


export type OrderAction =
    SetOrder |
    ConfirmOrder