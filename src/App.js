import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Register from './components/registerScreen';
import Home from './components/home';


function App() {

  return (
    <div className="App">
      <Route exact path='/registration' component={Register} />
      <Route exact path='/' component={Home} />
    </div>
  );
}
export default App;
