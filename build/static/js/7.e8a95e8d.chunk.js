webpackJsonp([7],{997:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(193),l=n(351),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={time:new Date},n}return i(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this;this.props.currentNavIndex("5"),this.timer=setInterval(function(){e.setState({time:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"\u8ba1\u65f6\u5668\uff1a ",this.state.time.toLocaleTimeString(),u.a.createElement("br",null)))}}]),t}(u.a.Component);t.default=Object(c.b)(function(e){return{text:e.text}},{currentNavIndex:l.a})(s)}});
//# sourceMappingURL=7.e8a95e8d.chunk.js.map