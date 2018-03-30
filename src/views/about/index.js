/**
 * index
 * create by lqy 2018/3/29
 */

import React from 'react';

class Aa extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <h1>Hello, {this.props.value}</h1>
    )
  }
}

class About extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'qiyu',
      dd: 'aa'
    }
  }
  
  render() {
    return (
      <div>
        <Aa value={this.state.value}></Aa>
        <Aa value={this.state.dd}></Aa>
        About
      </div>
    )
  }
}

export default About;