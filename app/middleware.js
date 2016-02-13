import location from 'redux-effects-location'
import effects from 'redux-effects'
import multi from 'redux-multi'
import events from 'redux-effects-events'
import fetch from 'redux-effects-fetch'
import logger from 'redux-logger'

export default [
  multi,
  effects,
  fetch,
  events(),
  location(),
  logger(),
]
