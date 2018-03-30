import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import XHeader from './components/xheader';

import Home from './views/home';
import Datalist from './views/datalist';
import About from './views/about';
import Clock from './views/clock';
import Toggle from './views/toggle';
import Status from './views/status';
import Form from './views/form';

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
            <Route path='/clock' component={Clock}></Route>
            <Route path='/toggle' component={Toggle}></Route>
            <Route path='/status' component={Status}></Route>
            <Route path='/form' component={Form}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
