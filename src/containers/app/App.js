import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Loadable from 'react-loadable';
import Menu from './../../components/menu';
import './app.css';

const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const Home = Loadable({
  loader: () => import('../../views/home/index'),
  loading: loadingComponent
});
const Datalist = Loadable({
  loader: () => import('../../views/datalist/index'),
  loading: loadingComponent
});
const About = Loadable({
  loader: () => import('../../views/about/index'),
  loading: loadingComponent
});
const Clock = Loadable({
  loader: () => import('../../views/clock/index'),
  loading: loadingComponent
});
const Toggle = Loadable({
  loader: () => import('../../views/toggle/index'),
  loading: loadingComponent
});
const Status = Loadable({
  loader: () => import('../../views/status/index'),
  loading: loadingComponent
});
const Form = Loadable({
  loader: () => import('../../views/form/index'),
  loading: loadingComponent
});
const Counter = Loadable({
  loader: () => import('../../views/counter/index'),
  loading: loadingComponent
});
const Todolist = Loadable({
  loader: () => import('../../views/todolist/index'),
  loading: loadingComponent
});

// 登录验证
function requireAuth(Layout, props) {
  console.log(Layout)
  console.log(props)
  if (true) { // 未登录
    alert('请登录')
    return <Redirect to="/form" />;
  } else {
    return <Layout {...props} />
  }
}


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div className="ant-layout-aside">
              <Menu></Menu>
              <div className="ant-layout-main">
                <div className="ant-layout-header"></div>
                <div className="ant-layout-breadcrumb">
                  <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                    <Breadcrumb.Item>某应用</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="ant-layout-container">
                  <div className="ant-layout-content">
                    <div>
                      <Switch>
                        <Route path='/'  component={props => requireAuth(Home, props)} exact></Route>
                        <Route path='/dataList' exact component={Datalist}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/clock' component={Clock}></Route>
                        <Route path='/toggle' component={Toggle}></Route>
                        <Route path='/status' component={Status}></Route>
                        <Route path='/form' component={Form}></Route>
                        <Route path='/counter' component={Counter}></Route>
                        <Route path='/todolist' component={Todolist}></Route>
                      </Switch>
                    </div>
                  </div>
                </div>
                <div className="ant-layout-footer">
                  Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                </div>
              </div>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
