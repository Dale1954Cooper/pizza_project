import {MenuListModel} from "../../../models/menu/MenuListModel";


export enum MenuActionEnum {
    LOAD_MENU_LIST = 'LOAD_MENU_LIST',
    SET_MENU_LIST = 'SET_MENU_LIST',
    LOAD_CERTAIN_MENU_LIST = 'LOAD_CERTAIN_MENU_LIST',
}

export interface MenuState {
    menu: MenuListModel | null;
    menuList: string[];
}

//Actions

export interface LoadMenuList {
    type: MenuActionEnum.LOAD_MENU_LIST
}

export interface SetMenuList {
    type: MenuActionEnum.SET_MENU_LIST,
    payload: string[]
}

export interface LoadCertainMenuList{
    type: MenuActionEnum.LOAD_CERTAIN_MENU_LIST
}

export type MenuAction =
    LoadMenuList |
    SetMenuList |
    LoadCertainMenuList