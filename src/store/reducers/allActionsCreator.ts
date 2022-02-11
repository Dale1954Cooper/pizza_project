import {AuthActionCreator} from "./auth/actionCreator";
import {MenuActionCreator} from "./menu/actionCreater";

export const allActionsCreator = {
    ...AuthActionCreator,
    ...MenuActionCreator
}