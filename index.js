import vdux from 'vdux/dom'
import h from 'vdux/element'

import App from './app/components/app.js'
import reducer from './app/reducer.js'
import middleware from './app/middleware.js'


document.addEventListener('DOMContentLoaded', () =>{
  return vdux({
    middleware,
    reducer,
    app,
    node: document.body,
    initialState: reducer(undefined, {})
  })
})

function app (state) {
  return h(App, state, [])
}
