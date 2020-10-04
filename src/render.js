import ReactDOM from "react-dom";
import App from "./App";
import {bll_add_post} from "./redux/state";
import React from "react";

export const rerenderReactTree = (state) => {
    ReactDOM.render(<App state={state} bll_add_post={bll_add_post}/>, document.getElementById('root'));
};