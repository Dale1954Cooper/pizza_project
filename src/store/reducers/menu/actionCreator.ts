import {AppDispatch} from "../../store";
import firebase from '../../../firebase'
import {
    MenuActionEnum,
    SetCertainMenuList,
    SetCurrentListName,
    SetCurrentMenuList,
    SetError,
    SetMenuList
} from './types'
import axios from "axios";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";
import {MenuListModel} from "../../../models/menu/MenuListModel";

interface dataNames {
    names: string[];
}

export const MenuActionCreator = {
    setMenuList: (list: string[]): SetMenuList => ({
        type: MenuActionEnum.SET_MENU_LIST,
        payload: list
    }),
    setMenu: (menu: MenuListModel[]): SetCertainMenuList => ({
        type: MenuActionEnum.SET_CERTAIN_MENU_LIST,
        payload: menu
    }),
    setCurrentListName: (name: string): SetCurrentListName => ({
        type: MenuActionEnum.SET_CURRENT_LIST_NAME,
        payload: name
    }),
    setCurrentMenuList: (list: MenuItemModel[]): SetCurrentMenuList => ({
        type: MenuActionEnum.SET_CURRENT_MENU_LIST,
        payload: list
    }),
    setError: (error: string): SetError => ({
        type: MenuActionEnum.SET_ERROR,
        payload: error
    }),

    loadMenuList: () => async (dispatch: AppDispatch) => {
        try {
            const res = await firebase.firestore().collection('menuList').doc('list').get();
            if (res) {
                const data = res.data() as dataNames;
                dispatch(MenuActionCreator.setMenuList(data.names))
            }
        } catch (e) {
            console.log("Error in menuAction in load menu list =>  ", e)
        }
    },

    loadCertainMenuList: () => async (dispatch: AppDispatch) => {
        try {

        } catch (e) {
            console.log("Error in menuAction in load certain menu list =>  ", e)
        }
    },

    getMoc: (name: string, oldArray: MenuListModel[]) => async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<MenuItemModel[]>(`./${name}.json`);
            if (res) {
                const newMenuList: MenuListModel = {
                    name: name,
                    items: res.data
                }
                const newList: MenuListModel[] = [...oldArray,newMenuList];
                dispatch(MenuActionCreator.setMenu(newList))
            }
        } catch (e) {
            console.log(e);
        }
    }
}