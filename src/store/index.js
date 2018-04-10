/**
 * index
 * create by lqy 2018/4/10
 */

import {createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);

export default store;