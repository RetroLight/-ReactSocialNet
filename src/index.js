import * as serviceWorker from './serviceWorker';
import {rerenderReactTree} from "./render";
import state from "./redux/state";
import {bll_add_post} from "./redux/state";
import {updatePostTxt} from "./redux/state";
import {clearField} from "./redux/state";

rerenderReactTree(state, bll_add_post, updatePostTxt, clearField);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
