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


function addItemToCart(state, product){
	const itemIndex = state.cartItems.findIndex(item => item.id === product.id) 
	return (itemIndex != -1) ?
		State.update(state, {cartItems: {[itemIndex]: {qty: {$apply: qty => qty + 1}}}}) :
		State.update(state, {cartItems: {$push: [CartItem({id: product.id, qty: 1})] }})
}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case URL_DID_CHANGE:
      return State.update(state, {url: {$set: action.payload}})
    case ADD_PRODUCT_TO_CART:
      return addItemToCart(state, action.payload) 
    default:
      return state
  }
}

module.exports = reducer
