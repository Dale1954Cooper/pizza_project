import {MenuActionEnum, menuActions, MenuState} from "./types";
import {MenuListModel} from "../../../models/MenuListModel";

const initialState: MenuState = {
    listNames: [] as string[],
    lists: [] as MenuListModel[],
    isLoading: false,
    error: '',

}

export default function menuReducer(state = initialState, action: menuActions): MenuState {
    switch (action.type) {
        case MenuActionEnum.SET_MENU_LIST:
            return {...state, listNames: action.payload}
        case MenuActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case MenuActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}