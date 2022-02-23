import {AuthActionCreator} from "./auth/actionCreator";
import {MenuActionCreator} from "./menu/actionCreator";
import {OrderActionCreator} from "./order/actionCreator";


export const allActionsCreator = {
    ...AuthActionCreator,
    ...MenuActionCreator,
    ...OrderActionCreator,
}