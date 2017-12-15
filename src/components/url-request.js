/* 
  2. 实现一个 React 的 Request 请求组件。
  
  功能描述：该组件只需要提供一个 URL，默认使用 GET 请求该 URL 并将结果
  传递给其包裹的任意元素进行渲染，加载中时可以显示加载文字或 spin。
  
  使用方法:
  <Request url="...">
    { data => <div>{data}</div> }
  </Request>

*/

import React from 'react'
import HttpRequest from './http-request'

class Request extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'loading...'
    }
    this.loadUrl = this.loadUrl.bind(this)
  }
  componentDidMount() {
    setTimeout(this.loadUrl, 1000)
  }
  loadUrl() {
    HttpRequest.get(this.props.url)
    .then(({status, response}) => {
      if (status === 200) {
        this.setState({ data: response })
      }
    })
  } // loadUrl
  render() {
    return this.props.children(JSON.stringify(this.state.data))
  }
}

class UrlRequestDom extends React.Component{
  render() {
    return (
      <div className='url-request'>
        <Request url="/sockjs-node/info">
          { data => <div>{data}</div> }
        </Request>
      </div>
    )
  } // render
}

export default UrlRequestDom
