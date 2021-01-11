
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import HomePage from './Containers/HomePage';
import './App.css';

function Message(props) {
  return (<div>{props.text || 'just text'}</div>)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/page' component={() => <Message text={"Hello another world"} />} />
        <Route exact path='/' component={ () => <HomePage />} />
      </Router>
    </div>
  );
}

export default App;