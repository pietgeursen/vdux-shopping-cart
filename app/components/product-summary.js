import h from 'vdux/element'

export default function render(state) {
  const name = state.props.name
  const id = state.props.id
	return h('div', {class: 'product'}, [
		h('div', {}, name),	
		h('div', {}, [
    	h('a', {href: '/products/' + id}, 'View Details')
		])
	])
}
