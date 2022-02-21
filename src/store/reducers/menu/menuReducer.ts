import {MenuAction, MenuActionEnum, MenuState} from "./types";
import {MenuListModel} from "../../../models/menu/MenuListModel";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";


const initialState: MenuState = {
    menu: [] as MenuListModel[],
    menuList: [] as string[],
    currentListName: '',
    currentMenuList: [] as MenuItemModel[],
    error: '',
}

export default function menuReducer(state = initialState, action: MenuAction): MenuState {
    switch (action.type) {
        case MenuActionEnum.LOAD_MENU_LIST:
            return {...state}
        case MenuActionEnum.SET_MENU_LIST:
            return {...state, menuList: action.payload}
        case MenuActionEnum.LOAD_CERTAIN_MENU_LIST:
            return {...state}
        case MenuActionEnum.SET_CERTAIN_MENU_LIST:
            return {...state, menu: action.payload}
        case MenuActionEnum.SET_CURRENT_LIST_NAME:
            return {...state, currentListName: action.payload}
        case MenuActionEnum.SET_CURRENT_MENU_LIST:
            return {...state, currentMenuList: action.payload}
        case MenuActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
