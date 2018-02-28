import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album'

class App extends Component {
  render() {
    return (
        <div class = "App">
        <header>
          <nav>
            <Link to="/">Landing</Link>
            <Link to="/library">Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album}/>
        </main>
      </div>
    );
  }
}

export default App;
