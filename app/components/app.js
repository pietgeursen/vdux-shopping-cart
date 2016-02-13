import h from 'vdux/element'
import ProductList from './product-list'
import CartSummary from './cart-summary'
import router from './routes.js'
import Layout from './layout'
import { initialiseApp } from '../actions.js'

function render(state) {
  return h(Layout,
    {id: 'main'},
    [
      h(CartSummary, state.props),
      h('div', {id: 'main'}, router(state.props.url, state.props)),
    ]
  )
}

function onCreate(){
  return initialiseApp()
}

export default {
  onCreate,
  render
}
