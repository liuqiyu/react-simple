/**
 * index
 * create by lqy 2018/4/9
 */

import React from 'react';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('9');
  }
  
  render() {
    return (
      <div>
      123
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(TodoList);
