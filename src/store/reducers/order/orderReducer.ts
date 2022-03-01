import {OrderAction, OrderActionEnum, OrderState} from "./types";
import {MenuItemInOrderModel} from "../../../models/menu/MenuItemInOrderModel";


const initialState: OrderState = {
    orderList: [] as MenuItemInOrderModel[],
    totalPrice: 0,
}

export default function orderReducer(state=initialState, action: OrderAction): OrderState {
    switch (action.type) {
        case OrderActionEnum.SET_ORDER:
            return {...state, orderList: action.payload}
        case OrderActionEnum.CONFIRM_ORDER:
            return {...state, orderList: [] as MenuItemInOrderModel[]}
        case OrderActionEnum.SET_TOTAL_PRICE:
            return {...state, totalPrice: action.payload}
        default:
            return state
    }
}
