import enroute from 'enroute'
import h from 'vdux/element'

import ProductList from './product-list.js'
import ProductDetail from './product-detail.js'


const router = enroute({
  '/': (params, state)=>{
    return h(ProductList, state.products)
  },
  '/products/:id': (params, state)=>{
    const product = state.products.find((product)=>{return product.id === Number(params.id)})
    return h(ProductDetail, product)
  }})

export default router
