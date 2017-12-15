	/* 
  1. 实现一个 React HOC（High-Order-Component）的 SearchComponent 搜索组件。
  
  功能描述：样式是一个 input 的搜索框，为其包裹的组件提供一个 onSearch 回调，
  只要它包裹的组件实现了 onSearch 方法，每当用户在 input 框中点击确认或者 enter 键，
  都可以使得其包裹组件的 onSearch 方法接收到用户在 input 框中输入的值。
  
  使用方法
  const EnhancedComponent = SearchComponent(YourComponent)
  Class YourComponent extends React.Component {
    onSearch (value) { // value is from input in SearchComponent
      console.log(value)
    }
  }
*/

import React from 'react'

class LogSearch extends React.Component {
  onSearch (value) { // value is from input in SearchComponent
    console.log(value)
  }
  render() { return '' } // used to pass component validate
}

/**
 * decorate search component by html interaction 
 * 
 * @param {*} WrappedComponent 
 */
function SearchComponent(WrappedComponent) {
  return class SearchInput extends React.Component{
    constructor(props) {
      super(props)
      this.onSearch = this.onSearch.bind(this)
      this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleKeyDown(e) {
      e.key === 'Enter' && this.onSearch()
    }
    onSearch() {
      let value = this.refs.textInput ? this.refs.textInput.value : ''
      this.refs.wrappedComponent && this.refs.wrappedComponent.onSearch(value)
    }
    render() {
      return (
        <div className="search-box">
          <input ref="textInput" onKeyPress={this.handleKeyDown} />
          <button onClick={this.onSearch}>Search</button>
          <WrappedComponent ref="wrappedComponent" />
        </div>
      )
    } // render
  } // class SearchInput
}

const SearchBar = SearchComponent(LogSearch)

export default SearchBar
