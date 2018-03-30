import { combineReducers } from 'redux'

import core from '../modules/core/reducers'

const rootReducer = combineReducers({
  core,
})

export default rootReducer
