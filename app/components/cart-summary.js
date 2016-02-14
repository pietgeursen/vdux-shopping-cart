import h from 'vdux/element'

import {cartProductsSelector, cartTotalSelector} from '../getters'

function render(state) {
	const products = cartProductsSelector(state.props)
	const total = cartTotalSelector(state.props)
  return h(
    'div', {id: 'side'}, [
			h('div', {id: 'cart'}, [
      	h('h4', {textContent: 'Shopping Cart'}),
				h('div', {class: 'products'}, products.map(product => h('div', {class: 'product'}, [
					h('div', {}, product.name ),
					h('div', {class: 'qty'}, product.qty)
				]))),
				h('div', {class: 'total'}, [
					h('h5', {textContent: 'Total:'}),
					total
				])
			])	
     ]) 
}

export default render
