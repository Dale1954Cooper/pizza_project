import {MenuListModel} from "../../../models/menu/MenuListModel";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";


export enum MenuActionEnum {
    LOAD_MENU_LIST = 'LOAD_MENU_LIST',
    SET_MENU_LIST = 'SET_MENU_LIST',
    LOAD_CERTAIN_MENU_LIST = 'LOAD_CERTAIN_MENU_LIST',
    SET_CERTAIN_MENU_LIST = 'SET_CERTAIN_MENU_LIST',
    SET_CURRENT_LIST_NAME = 'SET_CURRENT_LIST_NAME',
    SET_CURRENT_MENU_LIST = 'SET_CURRENT_MENU_LIST',
    SET_ERROR = 'SET_ERROR',

    SET_CARD_VISIBLE = 'SET_CARD_VISIBLE',
    SET_CARD_CONTENT = 'SET_CARD_CONTENT',
}

export interface MenuState {
    menu: MenuListModel[];
    menuList: string[];
    currentListName: string;
    currentMenuList: MenuItemModel[];
    error: string;

    isCardVisible: boolean;
    cardContent: MenuItemModel
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

export interface SetCertainMenuList {
    type: MenuActionEnum.SET_CERTAIN_MENU_LIST,
    payload: MenuListModel[]
}

export interface SetCurrentListName {
    type: MenuActionEnum.SET_CURRENT_LIST_NAME,
    payload: string
}

export interface SetCurrentMenuList {
    type: MenuActionEnum.SET_CURRENT_MENU_LIST,
    payload: MenuItemModel[]
}

export interface SetError {
    type: MenuActionEnum.SET_ERROR,
    payload: string
}

export interface SetCardVisible {
    type: MenuActionEnum.SET_CARD_VISIBLE,
    payload: boolean
}

export interface SetCardContent {
    type: MenuActionEnum.SET_CARD_CONTENT,
    payload: MenuItemModel
}

export type MenuAction =
    LoadMenuList |
    SetMenuList |
    LoadCertainMenuList |
    SetCertainMenuList |
    SetCurrentListName |
    SetCurrentMenuList |
    SetError |
    SetCardVisible |
    SetCardContent