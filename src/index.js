import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from "./redux/state";


export let rerenderReactTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
};

store.subscribe(rerenderReactTree);

rerenderReactTree(store.getState());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
