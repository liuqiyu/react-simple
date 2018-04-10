/**
 * index
 * create by lqy 2018/4/3
 */

import React from 'react';
import './counter.css';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    }
    
    this.reduce = this.reduce.bind(this);
    this.add = this.add.bind(this);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('8');
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

// export default Counter;
export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Counter);