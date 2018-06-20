import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './ui/layouts/Layout';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Matches } from './ui/components/index';
import store from './store/store';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">World Cup 2018</h1>
        </header>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/matches" component={Matches} />
            </Layout>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
