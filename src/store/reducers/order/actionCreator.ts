import {
    ConfirmOrder,
    OrderActionEnum,
    SetOrder
} from "./types";
import {AppDispatch} from "../../store";
import {MenuItemInOrderModel} from "../../../models/menu/MenuItemInOrderModel";


export const OrderActionCreator = {
    setOrder: (list: MenuItemInOrderModel[]): SetOrder => ({
        type: OrderActionEnum.SET_ORDER,
        payload: list,
    }),
    confirmOrder: (): ConfirmOrder => ({
        type: OrderActionEnum.CONFIRM_ORDER
    }),

    addItemToOrder: (order: MenuItemInOrderModel[], item: MenuItemInOrderModel) => (dispatch: AppDispatch) => {
        dispatch(OrderActionCreator.setOrder([...order, item]))
    },
    
    removeItemFromOrder: (order: MenuItemInOrderModel[], item: MenuItemInOrderModel) => (dispatch: AppDispatch) => {
        const index: number = order.findIndex(elem =>
            elem.name === item.name &&
            elem.sizePrise.size === item.sizePrise.size
        );
        if (index > 0) {
            const orderWithoutItem: MenuItemInOrderModel[] = [
                ...order.slice(0, index), ...order.slice(index + 1, order.length)
            ]
            dispatch(OrderActionCreator.setOrder(orderWithoutItem));
        }
    }

}