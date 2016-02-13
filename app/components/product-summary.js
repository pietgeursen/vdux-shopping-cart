import h from 'vdux/element'

export default function render(state) {
  const name = state.props.name
  const id = state.props.id
    return h('a', {href: '/products/' + id}, [name])
}
