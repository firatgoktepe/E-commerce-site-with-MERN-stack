import { 
    GET_ORDERS,
    ORDERS_LOADING,
    CHECKOUT
 } from '../actions/types'

 const initialState = {
    orders: [],
    loading: false
 }

export default function( state = initialState, action ){
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case ORDERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case CHECKOUT:
            return {
                ...state,
                orders: [action.payload, ...state.orders]
            }
        default:
            return state
    }
}