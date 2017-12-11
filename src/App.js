import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from './components/search-input'
import RequestDom from './components/url-request'
import ErrorWarper from './components/error-warper'

function ErrorComponent() {
  return 'ErrorComponent'
  // throw new Error()
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> issue 1: search HOC </h2>
        <SearchInput />
        <h2> issue 2: Request Component</h2>
        <RequestDom />
        <h2> issue 3: Error Warper </h2>
        <ErrorWarper errorMessage="Error!">
          <ErrorComponent />
        </ErrorWarper>
      </div>
    );
  }
}

export default App;
