import { bindUrl } from 'redux-effects-location'

const URL_DID_CHANGE = 'URL_DID_CHANGE'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

function initialiseApp(){
  return [
    bindUrl(urlDidChange)
  ]
}

function urlDidChange(url) {
 return {
  type: URL_DID_CHANGE,
  payload: url
 } 
}

function addProductToCart(product){
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export {
  initialiseApp,
  addProductToCart,

  URL_DID_CHANGE,
  ADD_PRODUCT_TO_CART
}
