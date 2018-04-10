/**
 * index
 * create by lqy 2018/3/30
 */

import React from 'react';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

function Page(props) {
  if (props.isLogin) {
    return (
      <div>已登录</div>
    )
  } else {
    return (
      <div>未登录</div>
    )
  }
}


class Status extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: false
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('6');
  }
  
  handleClick() {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLogin ? '注销' : '登录'}
        </button>
        <Page isLogin={this.state.isLogin}></Page>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Status);
