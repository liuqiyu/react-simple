/**
 * index
 * create by lqy 2018/3/29
 */

import React from 'react';
import './datalist.css';
import { connect } from 'react-redux'
import { currentNavIndex } from '../../store/action'

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.change = this.change.bind(this);
  }
  
  change(event) {
    this.props.bindChange(event.target.value);
  }
  
  render() {
    return (
      <div className="x-search clearfix">
        <div className="x-input">
          <input type="text" value={this.props.value} onChange={this.change}/>
        </div>
        <button className="x-button">点击</button>
      </div>
    )
  }
}

class List extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    if (this.props.data.length > 0) {
      return (
        <div className="x-list">
          <ul>
            {
              this.props.data.map((item, index) => {
                return <li className="x-item" key={item.id}>{index + 1}、{item.value}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return (
        <div className="x-list">
          <h2>无数据。。。</h2>
        </div>
      )
    }
  }
}

const data = [
  {
    id: 1,
    value: '中国很快会发布针对美国“301调查”？总值多少？商务部回应',
  },
  {
    id: 2,
    value: '秦始皇陵为什么一直没有打开，打开以后对目前的中国会有什么帮助吗？',
  },
  {
    id: 3,
    value: '贪官身边人：红包来了保姆先抽成 司机被提拔为保密局长 新闻+',
  },
  {
    id: 4,
    value: '北大才子捐258套别墅：被围堵提过分要求，村民住院通知他来交钱',
  },
  {
    id: 5,
    value: '万达酒店：去年亏损8.39亿港元，海外仅剩芝加哥一个项目',
  },
]

class Datalist extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      keyword: '',
      data: data,
    };
    this.change = this.change.bind(this);
  }
  
  componentDidMount() {
    this.props.currentNavIndex('4');
  }
  
  
  change(value) {
    this.setState({
      keyword: value,
    });
    
    this.filter(value);
  }
  
  filter(value) {
    let newArr = [];
  
   data.forEach((item) => {
      if (item.value.indexOf(value) > -1) {
        newArr.push(item);
      }
    })
    console.log(newArr)
    this.setState({
      data: newArr,
    });
  }
  
  render() {
    return (
      <div>
        <h1>今日头条</h1>
        <Search value={this.state.keyword} bindChange={this.change}></Search>
        <List data={this.state.data}></List>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Datalist);