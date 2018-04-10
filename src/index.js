import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './style/reset.css';
import './style/base.css';
import App from './containers/app/App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';


console.log(process.env.NODE_ENV)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
