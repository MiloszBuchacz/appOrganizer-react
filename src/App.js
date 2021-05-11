import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Register from './components/registerScreen';
import Home from './components/Home';
import Login from './components/loginPage';
import UserPage from './components/UserPage';


function App() {

  return (
    <div className="App">
      <Route exact path='/registration' component={Register} />
      <Route exact path='/user' component={UserPage} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/' component={Home} />
    </div>
  );
}
export default App;