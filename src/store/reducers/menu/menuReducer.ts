import {MenuAction, MenuActionEnum, MenuState} from "./types";


const initialState: MenuState = {
    menu: null,
    menuList: [],
}

export default function menuReducer(state = initialState, action: MenuAction): MenuState {
    switch (action.type) {
        case MenuActionEnum.LOAD_MENU_LIST:
            return {...state}
        case MenuActionEnum.SET_MENU_LIST:
            return {...state, menuList: action.payload}
        case MenuActionEnum.LOAD_CERTAIN_MENU_LIST:
            return {...state}
        default:
            return state
    }
}
