/**
 * index
 * create by lqy 2018/3/30
 */

import React from 'react';
import PropTypes from 'prop-types';
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      genderOptions: [
        {
          value: 1,
          label: '男',
        },
        {
          value: 2,
          label: '女',
        },
      ]
    }
  
    this.change = this.change.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  change(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  changeSelect(event) {
    this.setState({
      gender: event.target.value
    });
  }
  
  submit(event) {
    event.preventDefault();
    console.log(this.state)
    alert(this.state.name + '你好！')
  }
  
  render() {
    const optionList =  this.state.genderOptions.map((item, index) => {
      return <option key={index} value={item.value}>{item.label}</option>
    })
    
    return (
      <div>
        <form>
          <div className="form-item">
            <label>姓名:
              <input type="text" value={this.state.name} onChange={this.change} />
            </label>
          </div>
          <div className="form-item">
            <label>性别:
              <select onChange={this.changeSelect} value={this.state.gender}>
                {optionList}
              </select>
            </label>
          </div>
          <div className="form-item">
           <button type="button" onClick={this.submit}>登录</button>
          </div>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  name: PropTypes.array,
}

export default Form;