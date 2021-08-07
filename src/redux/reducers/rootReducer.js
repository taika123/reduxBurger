import { BurgerReducer } from "../reducers/BurgerReducer"
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    BurgerReducer,
})