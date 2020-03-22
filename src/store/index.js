import { createStore } from 'redux';

import reducers from './mudulos/rootReducer';

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(reducers, enhancer);

export default store;
