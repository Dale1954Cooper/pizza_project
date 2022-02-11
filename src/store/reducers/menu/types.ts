
import {MenuListModel} from "../../../models/MenuListModel";

export enum MenuActionEnum {
    LOAD_MENU_LIST_NAME = 'LOAD_MENU_LIST_NAME',
    LOAD_MENU_LIST = 'LOAD_MENU_LIST',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface MenuState {
    listNames: string[];
    lists: MenuListModel[];
    isLoading: boolean;
    error: string;
}

export interface LoadMenuListName {
    type: MenuActionEnum.LOAD_MENU_LIST_NAME;
    payload: string[];
}

export interface LoadMenuList {
    type: MenuActionEnum.LOAD_MENU_LIST;
    payload: MenuListModel[];
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
    LoadMenuListName |
    LoadMenuList |
    SetIsLoadingAction |
    SetErrorAction