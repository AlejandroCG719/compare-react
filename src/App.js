import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Faq from './components/Faq/Faq'
import Home from './components/Home/Home'
import { Route } from 'react-router-dom'

class App extends Component{
  render() {
    return (
        <div children="App">
          <Header/>
            <Route exact ={true} path="/" component ={ Home }></Route>
            <Route path="/faq" component ={ Faq }></Route>
          <Footer/>
        </div>
    );
  }
}
    /*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
