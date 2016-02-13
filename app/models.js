import t from 'tcomb'

const Product = t.struct({
  id: t.Number,
  name: t.String,
  price: t.Number
}, 'Product')

const Products = t.list(Product, 'Products')

const CartItem = t.struct({
  id: t.Number,
  qty: t.Number
}, 'CartItem')

const CartItems = t.list(CartItem, 'CartItems')

const State = t.struct({
  products: Products,  
  cartItems: CartItems,
  url: t.String
})

module.exports = {
  Product,
  Products,
  CartItem,
  CartItems,
  State
}





