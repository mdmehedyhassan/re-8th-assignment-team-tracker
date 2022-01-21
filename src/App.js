import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Team from './components/Team/Team';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:id">
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
