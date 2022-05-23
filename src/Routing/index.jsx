import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Service from './Service';

const Routing = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
