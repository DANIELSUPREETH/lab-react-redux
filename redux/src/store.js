// src/store.js
import { createStore, applyMiddleware, compose } from 'redux'; // Import applyMiddleware and compose if needed
import reducer from './Reducer';
const store = createStore(reducer);

export default store;
