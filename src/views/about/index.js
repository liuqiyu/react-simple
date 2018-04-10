/**
 * index
 * create by lqy 2018/3/29
 */

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

class About extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('3');
  }
  
  render() {
    return (
      <div>
        <h1>
          <Link to='/about/messages/1'>message</Link>
        </h1>
        <h1>
          <Link to='/about'>about</Link>
        </h1>
        about
        
        <Route path={`${this.props.match.url}/messages/:id`} exact component={Message}/>
      </div>
    )
  }
}

// export default About;
export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(About)