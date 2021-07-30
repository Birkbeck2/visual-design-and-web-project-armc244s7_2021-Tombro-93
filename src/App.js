
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/login';
import ShopPage from './pages/store';
import NewPage from './pages/new';
import PromotionPage from './pages/promotion'
import HoldingPage from './pages/holding'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/shop' component={ShopPage} exact/>
        <Route path='/new' component={NewPage} exact/>
        <Route path='/promotion' component={PromotionPage} exact/>
        <Route path='/hold' component={HoldingPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
