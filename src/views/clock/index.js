/**
 * index
 * create by lqy 2018/3/30
 */

import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
    }
  }
  
  componentDidMount() {
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

export default Clock;