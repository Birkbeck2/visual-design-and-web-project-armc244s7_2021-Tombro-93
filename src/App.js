
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/login';
import ShopPage from './pages/store';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/store' component={ShopPage} exact/>
      </Switch>
     
    </Router>
  );
}

export default App;
