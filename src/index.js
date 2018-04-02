import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style/reset.css';
import './style/base.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

console.log(process.env.NODE_ENV)
ReactDOM.render(<App />,
  document.getElementById('root'));
registerServiceWorker();
