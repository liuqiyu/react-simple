/**
 * index
 * create by lqy 2018/3/30
 */

import React from 'react';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('7');
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'on' : 'off'}
        </button>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Toggle);
