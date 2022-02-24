import {OrderAction, OrderActionEnum, OrderState} from "./types";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";
import {MenuItemInOrderModel} from "../../../models/menu/MenuItemInOrderModel";


const initialState: OrderState = {
    orderList: [] as MenuItemInOrderModel[]
}

export default function orderReducer(state=initialState, action: OrderAction): OrderState {
    switch (action.type) {
        case OrderActionEnum.SET_ORDER:
            return {...state, orderList: action.payload}
        case OrderActionEnum.CONFIRM_ORDER:
            return {...state, orderList: [] as MenuItemInOrderModel[]}
        default:
            return state
    }
}
