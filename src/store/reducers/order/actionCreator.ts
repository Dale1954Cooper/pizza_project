import {MenuItemModel} from "../../../models/menu/MenuItemModel";
import {AddItemToOrder, ConfirmOrder, OrderActionEnum, RemoveItemFromOrder} from "./types";


export const OrderActionCreator = {
    addItem: (list: MenuItemModel[]): AddItemToOrder => ({
        type: OrderActionEnum.ADD_ITEM,
        payload: list
    }),
    removeItem: (list: MenuItemModel[]): RemoveItemFromOrder => ({
        type: OrderActionEnum.REMOVE_ITEM,
        payload: list
    }),
    confirmOrder: (): ConfirmOrder => ({
        type: OrderActionEnum.CONFIRM_ORDER
    })

}