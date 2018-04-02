/**
 * menu
 * create by lqy 2018/4/2
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './menu.css';
const SubMenu = Menu.SubMenu;

class XMenu extends React.Component {
  render() {
    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo">REACT</div>
        <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />我的demo1</span>}>
            <Menu.Item key="1" >
              <Link to="">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/form">表单</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/about">关于我们</Link>
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
          </SubMenu>
          {/*<SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>*/}
            {/*<Menu.Item key="5">选项5</Menu.Item>*/}
            {/*<Menu.Item key="6">选项6</Menu.Item>*/}
            {/*<Menu.Item key="7">选项7</Menu.Item>*/}
            {/*<Menu.Item key="8">选项8</Menu.Item>*/}
          {/*</SubMenu>*/}
        </Menu>
      </aside>
    )
  }
}

export default XMenu;