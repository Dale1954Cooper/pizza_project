import {MenuItemInOrderModel} from "../../../models/menu/MenuItemInOrderModel";

export enum OrderActionEnum {
    SET_ORDER = 'SET_ORDER',
    CONFIRM_ORDER = 'CONFIRM_ORDER',
    SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
}

export interface OrderState {
    orderList: MenuItemInOrderModel[]
    totalPrice: number
}

//Actions

export interface SetOrder {
    type: OrderActionEnum.SET_ORDER;
    payload: MenuItemInOrderModel[]
}

export interface ConfirmOrder {
    type: OrderActionEnum.CONFIRM_ORDER
}

export interface SetTotalPrice {
    type: OrderActionEnum.SET_TOTAL_PRICE;
    payload: number;
}


export type OrderAction =
    SetOrder |
    ConfirmOrder |
    SetTotalPrice