/**
 * index
 * create by lqy 2018/4/3
 */

import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    }
    
    this.reduce = this.reduce.bind(this);
    this.add = this.add.bind(this);
  }
  
  reduce() {
    this.setState({
      value: this.state.value - 1
    })
  }
  
  add() {
    this.setState({
      value: this.state.value + 1
    })
  }
  
  render() {
    return (
      <div className="counter">
        <span onClick={this.reduce}>-</span>
        <span>{this.state.value}</span>
        <span onClick={this.add}>+</span>
      </div>
    )
  }
}

export default Counter;