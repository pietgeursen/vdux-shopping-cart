import h from 'vdux/element'

import {cartProductsSelector} from '../getters'

function render(state) {
	const products = cartProductsSelector(state.props)
  return h(
    'div', {id: 'side'}, [
			h('div', {id: 'cart'}, [
      	h('h4', {textContent: 'Shopping Cart'}),
				h('div', {class: 'products'}, products.map(product => h('div', {}, product.name)))
			])	
     ]) 
}

export default render
