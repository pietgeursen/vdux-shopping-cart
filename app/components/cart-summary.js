import h from 'vdux/element'

function render(state) {
  const products = state.props.cartItems.map(item => {
    return state.props.products.find(product => product.id === item.id )
  })
  return h(
    'div', {id: 'side'}, [
			h('div', {id: 'cart'}, [
      	h('h4', {textContent: 'Shopping Cart'}),
				h('div', {class: 'products'}, products.map(product => h('div', {}, product.name)))
			])	
     ]) 
}

export default render
