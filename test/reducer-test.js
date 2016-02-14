import test from 'tape'

import reducer from '../app/reducer'
import {addProductToCart} from '../app/actions'

test('Reducer initial state', (t) => {
  const state = reducer(undefined,{})
  t.equal(state.products.length, 5, 'Iniitial state has 5 products')
  t.equal(state.cartItems.length, 1, 'Iniitial state has 1 product in cart')
  t.equal(state.url, '/', 'Iniitial state has url of / ')
  t.end()
})
test('Reducer adds a new item to cart ', (t) => {
  const state = reducer(undefined,{})
  const product = state.products[0]
  const newState = reducer(state, addProductToCart(product))
  t.equal(state.cartItems.length, 1, 'Iniitial state has 1 product in cart')
  t.equal(newState.cartItems.length, 2, 'New state has 2 products in cart')
  t.end()
})
test('Reducer adds an existing item to cart ', (t) => {
  const state = reducer(undefined,{})
  const product = state.products.find(item => item.id === state.cartItems[0].id)
  const productQty = state.cartItems[0].qty
  const newState = reducer(state, addProductToCart(product))
  t.equal(newState.cartItems.find(item => item.id === product.id).qty, productQty + 1, 'Qty increases by 1')
  t.end()
})
