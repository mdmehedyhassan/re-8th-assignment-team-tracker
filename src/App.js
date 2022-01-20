import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import axios from 'axios';
import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const TeamContext = createContext();


function App() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    axios('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
      .then(data => setTeams(data.data.teams))
  }, []);
  return (
    <TeamContext.Provider value={teams}>
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
    </TeamContext.Provider>
  );
}

export default App;
