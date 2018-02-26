import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
        <div class = "App">
        <header>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
        </main>
      </div>
    );
  }
}

export default App;
