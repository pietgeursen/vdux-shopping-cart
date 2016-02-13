import h from 'vdux/element'
import {addProductToCart} from '../actions'

export default function render(state) {
	const name = state.props.name
	return h('div', {class: 'product'},[
		h('div', {}, ['Detailed view of: ', name]),
		h('div', {}, [
		h('button', {onClick: addToCart(state.props)}, 'Add to Cart' )	
		]),
		h('div', {}, [
		h('a', {href: '/'}, 'View all products')	
		])
	])
	//<div className='product' id={id}>
		//<div> Detailed view of a product {name}</div>
		//<div><a href='' onClick={addToCart}>Add to Cart</a></div>
		//<div><Link to='/'>View all</Link></div>
		//</div>
		//)
}


function addToCart(product){
	return function(){return addProductToCart(product)}	
}


