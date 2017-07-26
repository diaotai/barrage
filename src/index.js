import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import  reducer  from './reducer';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer);
console.log(store)
window.private = {}
window.private.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
