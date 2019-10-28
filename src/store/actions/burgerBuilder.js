import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
       type: actionTypes.SET_INGREDIENT,
       ingredients: ingredients 
    }
}
export const initIngredients = () => {
    return dispatch => {
        axios.get('/orders.json').then(res => {
            dispatch(setIngredients(res.data))
        }
            this.setState({ loading: false, orders: fetchedOrders });

        }).catch(err => {
            this.setState({ loading: false });
        })
    }
}