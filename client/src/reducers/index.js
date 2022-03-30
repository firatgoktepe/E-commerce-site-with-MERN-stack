import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    item: itemReducer,
    auth: authReducer,
    error: errorReducer,
    cart: cartReducer,
    order: orderReducer
})