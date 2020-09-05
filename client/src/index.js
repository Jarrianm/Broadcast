//rendering root component to the dom/redux
import React from "react";
import ReactDom from "react-dom";
import App from './components/App'
import {Provider} from 'react-redux'
import{ createStore, applyMiddleware} from 'redux'

const store = createStore(() => [], {}, applyMiddleware());

ReactDom.render(<Provider store={store}></Provider> <App/><Provider/>, document.querySelector('#root'));
