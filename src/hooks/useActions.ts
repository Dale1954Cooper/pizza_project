import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import {allActionsCreator} from "../store/reducers/allActionsCreator";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionsCreator, dispatch)
}