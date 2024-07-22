import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Album from './pages/Album';
import Genre from './pages/Genre';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/playlist/:id" component={Playlist} />
            <Route path="/album/:id" component={Album} />
            <Route path="/genre/:name" component={Genre} />
          </Switch>
        </div>
        <Player />
      </div>
    </Router>
  );
}

export default App;
