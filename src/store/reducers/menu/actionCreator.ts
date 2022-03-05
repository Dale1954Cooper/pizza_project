import {AppDispatch} from "../../store";
import firebase from '../../../firebase'
import {
    MenuActionEnum,
    SetCardVisible,
    SetCertainMenuList,
    SetCurrentListName,
    SetCurrentMenuList,
    SetError,
    SetMenuList,
    SetCardContent
} from './types'
import axios from "axios";
import {MenuItemModel} from "../../../models/menu/MenuItemModel";
import {MenuListModel} from "../../../models/menu/MenuListModel";
import {getDatabase, ref, onValue, child} from 'firebase/database';
import database = firebase.database;
import {DatabaseReference} from "@firebase/database";


const dbRef = ref(getDatabase());

interface dataNames {
    names: string[];
}

interface pizzasList {
    name: MenuItemModel[];
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
    setCardVisible: (is: boolean): SetCardVisible => ({
        type: MenuActionEnum.SET_CARD_VISIBLE,
        payload: is
    }),
    setCardContent: (content: MenuItemModel): SetCardContent => ({
        type: MenuActionEnum.SET_CARD_CONTENT,
        payload: content
    }),

    loadMenuNameList: () => async (dispatch: AppDispatch) => {
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

    loadMenuList: (name: string, oldArray: MenuListModel[]) => async (dispatch: AppDispatch) => {
        try {
            //const res = await child(dbRef, name)
            const res = await firebase.database().ref().child(name).get()
            if(res.exists()){
                const newMenuList: MenuListModel = {
                    name: name,
                    items: res.val()
                }
                const newList: MenuListModel[] = [...oldArray, newMenuList];
                dispatch(MenuActionCreator.setMenu(newList))
            } else {
                ///
            }
        } catch (e) {
            console.log(e)
        }
    },


   /* getMoc: (name: string, oldArray: MenuListModel[]) => async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<MenuItemModel[]>(`./${name}.json`);
            if (res) {
                const newMenuList: MenuListModel = {
                    name: name,
                    items: res.data
                }
                const newList: MenuListModel[] = [...oldArray, newMenuList];
                dispatch(MenuActionCreator.setMenu(newList))
            }
        } catch (e) {
            console.log(e);
        }
    },
    */

    showItemCard: (content: MenuItemModel) => (dispatch: AppDispatch) => {
        dispatch(MenuActionCreator.setCardContent(content));
        dispatch(MenuActionCreator.setCardVisible(true));
    },

    hideItemCard: () => (dispatch: AppDispatch) => {
        dispatch(MenuActionCreator.setCardVisible(false));
        dispatch(MenuActionCreator.setCardContent({} as MenuItemModel));
    }

}