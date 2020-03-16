import { createStore } from 'redux';

import reducers from './mudulos/rootReducer';

const store = createStore(reducers);

export default store;
