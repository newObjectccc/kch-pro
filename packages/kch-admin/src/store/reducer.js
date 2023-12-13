import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userModule from './userModule';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  user: userModule
});

export default reducer;
