/**
 * xheader
 * create by lqy 2018/3/29
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class XHeader extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <header className="x-header">
        <div className="common-width x-h-content">
          <ul>
            <li className="nav-item">
              <Link to='home'>首页</Link>
            </li>
            <li className="nav-item">
              <Link to='dataList'>数据列表</Link>
            </li>
            <li className="nav-item">
              <Link to='about'>关于我们</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default XHeader;