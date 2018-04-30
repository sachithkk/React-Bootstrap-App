import React, { Component } from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/><br/>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
