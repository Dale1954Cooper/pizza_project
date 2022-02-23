import {OrderAction, OrderActionEnum, OrderState} from "./types";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";


const initialState: OrderState = {
    orderList: [] as MenuItemModel[]
}

export default function orderReducer(state=initialState, action: OrderAction): OrderState {
    switch (action.type) {
        case OrderActionEnum.ADD_ITEM:
            return {...state, orderList: action.payload}
        case OrderActionEnum.REMOVE_ITEM:
            return {...state, orderList: action.payload}
        case OrderActionEnum.CONFIRM_ORDER:
            return {...state, orderList: [] as MenuItemModel[]}
        default:
            return state
    }
}
