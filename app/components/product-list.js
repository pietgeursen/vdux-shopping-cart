import h from 'vdux/element'
import ProductSummary from './product-summary.js'

function render(state) {
  const productSummaries = state.props.map( product => 
    h(ProductSummary, product)
  )
  return h('div',{id: 'productList'}, [
		h('h4', {textContent: 'Products'}),
		productSummaries,
	]) 
}
export default render
