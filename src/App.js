
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/login';
import ShopPage from './pages/store';
import PromotionPage from './pages/promotion'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/shop' component={ShopPage} exact/>
        <Route path='/promotion' component={PromotionPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
