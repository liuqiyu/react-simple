/**
 * index
 * create by lqy 2018/3/30
 */

import React from 'react';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
    }
  }
  
  componentDidMount() {
    this.props.currentNavIndex('5');
    this.timer = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div>
        <h1>
          计时器： { this.state.time.toLocaleTimeString() }
          <br/>
        </h1>
      </div>
    )
  }
}

// export default Clock;
export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Clock);