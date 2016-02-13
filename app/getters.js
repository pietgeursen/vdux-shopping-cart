import {createSelector} from 'reselect'

const productsSelector = state => state.products

const cartItemsSelector = state => state.cartItems


const cartProductsSelector = createSelector(
  productsSelector,
  cartItemsSelector,
  (products, cartItems) => cartItems.map((item => products.find((product) => product.id === item.id )))
)

const cartTotalSelector = createSelector(
    
)

module.exports = {
  productsSelector,
  cartItemsSelector,
  cartProductsSelector
}
