import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const rerenderReactTree = (state, bll_add_post, updatePostTxt, clearField) => {
    ReactDOM.render(<App state={state} bll_add_post={bll_add_post} updatePostTxt={updatePostTxt} clearField={clearField}/>, document.getElementById('root'));
};