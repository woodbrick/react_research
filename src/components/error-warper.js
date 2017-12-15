/* 
  3. 实现一个 React 的 容错组件。
  
  功能描述：该组件可以对其包裹的元素进行容错处理，当其包裹的 React 元素发生任何错误的时候，
  会可以显示预定义好的错误文案或者组件。提示：React 16 提供了 componentDidCatch 方法。
  
  使用方法:
  <ErrorWrapeer errorMessage="Error!">
    <YourComponent />
  </ErrorWrapeer>
    
*/
import React from 'react';
class ErrorWarper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>{this.props.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorWarper
