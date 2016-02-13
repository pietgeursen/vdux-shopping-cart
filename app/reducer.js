import {CartItems, CartItem, Product, Products, State} from './models'
import {fromJS} from 'immutable'
import {URL_DID_CHANGE, ADD_PRODUCT_TO_CART} from './actions'


const INITIAL_STATE ={
  products: Products([
    Product({id: 1, name:'spaghetti', price: 3.5}),
    Product({id: 2, name:'gold', price: 3.5}),
    Product({id: 3, name:'rake', price: 3.5}),
    Product({id: 4, name:'car', price: 3.5}),
    Product({id: 5, name:'piet', price: 3.5})
  ]),
  cartItems: CartItems([
   CartItem({id:2, qty: 4})
  ]),
  url: '/'
} 


function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case URL_DID_CHANGE:
      return State.update(state, {url: {$set: action.payload}})
    case ADD_PRODUCT_TO_CART:
      return State.update(state, {CartItems: {$apply: (item) => item.id === action.payload.id ? item.qty++ : item}})
    default:
      return state
  }
}

module.exports = reducer
