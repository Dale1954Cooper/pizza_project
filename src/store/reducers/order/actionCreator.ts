import {
    ConfirmOrder,
    OrderActionEnum,
    SetOrder, SetTotalPrice
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
    setTotalPrice: (price: number): SetTotalPrice => ({
        type: OrderActionEnum.SET_TOTAL_PRICE,
        payload: price,
    }),

    addItemToOrder: (order: MenuItemInOrderModel[], item: MenuItemInOrderModel) => (dispatch: AppDispatch) => {
        const index: number = order.findIndex(elem =>
            elem.name === item.name &&
            elem.size === item.size
        )
        if (index >= 0) {
            order[index].count++;
            dispatch(OrderActionCreator.setOrder(order));
        } else {
            dispatch(OrderActionCreator.setOrder([...order, item]))
        }
    },

    removeItemFromOrder: (order: MenuItemInOrderModel[], item: MenuItemInOrderModel) => (dispatch: AppDispatch) => {
        const index: number = order.findIndex(elem =>
            elem.name === item.name &&
            elem.size === item.size
        );

        if (index > -1) {
            if (order[index].count > 1) {
                order[index].count--;
                dispatch(OrderActionCreator.setOrder(order));
            } else {
                order[index].count--;
                const orderWithoutItem: MenuItemInOrderModel[] = [
                    ...order.slice(0, index), ...order.slice(index + 1, order.length)
                ]
                dispatch(OrderActionCreator.setOrder(orderWithoutItem));
            }
        }
    },

    calculateTotalPrice: (order: MenuItemInOrderModel[]) => (dispatch: AppDispatch) => {
        let sum = 0;
        order.map(item => sum += item.price * item.count);
        dispatch(OrderActionCreator.setTotalPrice(sum));
    },

    remoAllOrder: () => (dispatch: AppDispatch) => {
        dispatch(OrderActionCreator.setTotalPrice(0))
        dispatch(OrderActionCreator.setOrder([]))
    }
}