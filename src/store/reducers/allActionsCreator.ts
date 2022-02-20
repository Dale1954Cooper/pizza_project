import {AuthActionCreator} from "./auth/actionCreator";
import {MenuActionCreator} from "./menu/actionCreator";


export const allActionsCreator = {
    ...AuthActionCreator,
    ...MenuActionCreator
}