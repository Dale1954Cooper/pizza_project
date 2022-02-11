import axios from "axios";

import {AppDispatch, store} from "../../store";
import {
    MenuActionEnum,
    LoadMenuList,
    SetErrorAction,
    LoadMenuListName,
    SetIsLoadingAction,
} from "./types";
import {MenuItemModel} from "../../../models/MenuItemModel";
import {MenuListModel} from "../../../models/MenuListModel";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


export const MenuActionCreator = {
    setMenuListName: (list: string[]): LoadMenuListName => ({
        type: MenuActionEnum.LOAD_MENU_LIST_NAME,
        payload: list
    }),
    setMenuList: (list: MenuListModel[]): LoadMenuList => ({
        type: MenuActionEnum.LOAD_MENU_LIST,
        payload: list
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: MenuActionEnum.SET_IS_LOADING,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: MenuActionEnum.SET_ERROR,
        payload
    }),

    loadMenuListName: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(MenuActionCreator.setIsLoading(true))
            const res = await axios.get<string[]>('./menuList.json');
            if (res) {
                dispatch(MenuActionCreator.setMenuListName(res.data))
            } else {
                dispatch(MenuActionCreator.setError('Failed to load menu list name'))
            }
            dispatch(MenuActionCreator.setIsLoading(false))
        } catch (e) {
            console.log("Error in menuAction in loadMenuListName =>  ", e)
        }
    },

    addMenuList: (list: MenuListModel) => {
        const {lists} = store.getState().menuReducer
        lists.push(list)
        return {...lists};
    },

    loadMenuList: (name: string, url: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(MenuActionCreator.setIsLoading(true))
            const res = await axios.get<MenuItemModel[]>(url)
            if (res) {
                const list: MenuListModel = {
                    name: name,
                    isLoaded: true,
                    items: res.data
                }
                const newLists: MenuListModel[] = MenuActionCreator.addMenuList(list);
                dispatch(MenuActionCreator.setMenuList(newLists));
                dispatch(MenuActionCreator.setIsLoading(false));
            } else {
                dispatch(MenuActionCreator.setError(`Failed to load ${name} list`))
            }
            dispatch(MenuActionCreator.setIsLoading(false))
        } catch (e) {
            console.log("Error in menuAction in loadMenuItem =>  ", e)
        }
    }

}