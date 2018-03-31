import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import XHeader from '../../components/xheader';

import Home from '../../views/home/index';
import Datalist from '../../views/datalist/index';
import About from '../../views/about/index';
import Clock from '../../views/clock/index';
import Toggle from '../../views/toggle/index';
import Status from '../../views/status/index';
import Form from '../../views/form/index';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <XHeader></XHeader>
          <div className="content common-width">
            <Switch>
              <Route path='/' component={Home} exact></Route>
              <Route path='/dataList' component={Datalist}></Route>
              <Route path='/about' exact component={About}></Route>
              <Route path='/clock' component={Clock}></Route>
              <Route path='/toggle' component={Toggle}></Route>
              <Route path='/status' component={Status}></Route>
              <Route path='/form' component={Form}></Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
