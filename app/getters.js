import {createSelector} from 'reselect'

const productsSelector = state => state.products

const cartItemsSelector = state => state.cartItems


const cartProductsSelector = createSelector(
  productsSelector,
  cartItemsSelector,
  (products, cartItems) => cartItems.map(item => Object.assign({}, products.find((product) => product.id === item.id ), {qty: item.qty}))
)

const cartTotalSelector = createSelector(
  cartProductsSelector,
  (products) => products.reduce((total, product) => (total + (product.price * product.qty)), 0)
)

module.exports = {
  productsSelector,
  cartItemsSelector,
  cartProductsSelector,
  cartTotalSelector
}
