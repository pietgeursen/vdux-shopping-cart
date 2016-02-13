import {CartItems, CartItem, Product, Products, State} from './models'
import {fromJS} from 'immutable'
import {URL_DID_CHANGE, ADD_PRODUCT_TO_CART} from './actions'


const INITIAL_STATE ={
  products: Products([
    Product({id: 1, name:'Spaghetti', price: 3.5}),
    Product({id: 2, name:'Gold', price: 3.5}),
    Product({id: 3, name:'Rake', price: 3.5}),
    Product({id: 4, name:'Car', price: 3.5}),
    Product({id: 5, name:'Piet', price: 3.5})
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
      return State.update(state, {cartItems: {$apply: (item) => item.id === action.payload.id ? CartItem.update(item, {qty: {$set: item.qty + 1}}) : item}})
    default:
      return state
  }
}

module.exports = reducer
