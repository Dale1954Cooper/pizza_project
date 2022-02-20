import {AppDispatch} from "../../store";
import firebase from '../../../firebase'
import {MenuActionEnum, SetMenuList} from './types'

interface dataNames {
    names: string[];
}

export const MenuActionCreator = {
    setMenuList: (list: string[]): SetMenuList => ({
        type: MenuActionEnum.SET_MENU_LIST,
        payload: list
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

    loadCertainMenuList:() => async (dispatch: AppDispatch) => {
    try {

    } catch (e) {
        console.log("Error in menuAction in load certain menu list =>  ", e)
    }
}
}