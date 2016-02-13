import h from 'vdux/element'

export default function render({props, children}){
  return h('div', {}, [
    h('h1', {textContent: 'Redux Shop'}),
    renderNav({
      items: [{
        href: '/',
        text: 'home'
      }] 
    }),
    h('div', {}, children)
  ])
}

function renderNav(props){
  return h('ul', {}, props.items.map(item => renderNavItem(item)))
}

function renderNavItem(props){
  return h('a', {
    href: props.href
  }, 
  h('li', {
    textContent: props.text
  })   
  )
}
