import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import {loadPlanets} from './actions/planetActions';
/* import routes from './routes'; */

const logger = createLogger();
export const store = createStore(
    rootReducer, 
    {},
    applyMiddleware(thunk, logger)
)
store.dispatch(loadPlanets());

ReactDOM.render(
    <Provider store={store}>
    {/* <Router history={browserHistory} routes={routes} /> */}
        <App />
    </Provider>,
    document.getElementById('root'));
