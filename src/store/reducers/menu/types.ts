import {MenuListModel} from "../../../models/MenuListModel";

export enum MenuActionEnum {
    SET_MENU_LIST = 'SET_MENU_LIST',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface MenuState {
    name: string[];
    lists: MenuListModel[];
    isLoading: boolean;
    error: string;
}

export interface SetMenuList {
    type: MenuActionEnum.SET_MENU_LIST;
    payload: string[];
}

export interface SetIsLoadingAction {
    type: MenuActionEnum.SET_IS_LOADING;
    payload: boolean
}

export interface SetErrorAction {
    type: MenuActionEnum.SET_ERROR;
    payload: string;
}

export type menuActions =
    SetMenuList |
    SetIsLoadingAction |
    SetErrorAction