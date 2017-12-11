import {combineReducers} from 'redux';  
import planetReducer from './planetReducer';

const rootReducer = combineReducers({  
  // short hand property names
  planet : planetReducer
})

export default rootReducer;  