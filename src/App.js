import React, { Component } from 'react';
import { BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory, IndexLink } from 'react-router-dom';
import XHeader from './components/xheader';

import Home from './views/home';
import Datalist from './views/datalist';
import About from './views/about';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/'>
        <div className="App">
          <XHeader></XHeader>
          <div className="content common-width">
            <Route path='/home' component={Home}></Route>
            <Route path='/dataList' component={Datalist}></Route>
            <Route path='/about' component={About}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
