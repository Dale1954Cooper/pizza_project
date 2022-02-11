import axios from "axios";

import {AppDispatch} from "../../store";
import {
    MenuActionEnum,
    SetIsLoadingAction,
    SetErrorAction, SetMenuList,
} from "./types";



export const MenuActionCreator = {
    setMenuList: (list: string[]): SetMenuList => ({
       type: MenuActionEnum.SET_MENU_LIST,
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

    loadMenuList: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(MenuActionCreator.setIsLoading(true))
            const res = await axios.get<string[]>('./menuList.json');
            if (res) {
                dispatch(MenuActionCreator.setMenuList(Object.values(res.data)))
            } else {
                dispatch(MenuActionCreator.setError('Failed to load menu list'))
            }
            dispatch(MenuActionCreator.setIsLoading(false))
        } catch (e) {
            console.log("Error in menuAction in loadMenuList =>  ", e)
        }
    }
}