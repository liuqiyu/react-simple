/**
 * index
 * create by lqy 2018/3/29
 */

import React from 'react';
import logo from './../../images/logo.svg';
import './home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <div className="home">
        <h1>这是首页</h1>
        <div className="img">
          <img src={logo} alt=""/>
        </div>
      </div>
    )
  }
}

export default Home;