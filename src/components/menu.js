/**
 * menu
 * create by lqy 2018/4/2
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './menu.css';
import { currentNavIndex } from './../store/action'
const SubMenu = Menu.SubMenu;

class XMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    console.log(this.props)
    const { text } = this.props;
    
    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo">REACT</div>
        <Menu mode="inline" theme="dark"
              selectedKeys={[text]} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />我的demo1</span>}>
            <Menu.Item key="1" >
              <Link to="">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/form">表单</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/about">关于我们{text}</Link>
            </Menu.Item>
            <Menu.Item key="4" >
              <Link to="/datalist">数据列表</Link>
            </Menu.Item>
            <Menu.Item key="5" >
              <Link to="/clock">时钟</Link>
            </Menu.Item>
            <Menu.Item key="6" >
              <Link to="/status">登录状态</Link>
            </Menu.Item>
            <Menu.Item key="7" >
              <Link to="/toggle">toggle</Link>
            </Menu.Item>
            <Menu.Item key="8" >
              <Link to="/counter">购物车加减</Link>
            </Menu.Item>
            <Menu.Item key="9" >
              <Link to="/todolist">todolist</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    )
  }
}

// export default XMenu;

export default connect(state => ({
  text: state.text,
}), dispatch => ({
  currentNavIndex: () => dispatch(currentNavIndex),
}))(XMenu)