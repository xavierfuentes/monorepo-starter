import { combineReducers } from 'redux'

import core from '../modules/root/reducers'

const rootReducer = combineReducers({
  core,
})

export default rootReducer
