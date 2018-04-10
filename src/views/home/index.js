/**
 * index
 * create by lqy 2018/3/29
 */

import React from 'react';
import { Button } from 'antd';
import logo from './../../images/logo.svg';
import './home.css';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class Home extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('1');
  }
  
  render() {
    return (
      <div className="home">
        <Button type="primary">Primary</Button>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <h1>这是首页</h1>
        <div className="img">
          <img src={logo} alt=""/>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Home);
