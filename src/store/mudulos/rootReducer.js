import { combineReducers } from 'redux';

import cart from './card/reducer';

const reducers = combineReducers({
  cart,
});

export default reducers;
