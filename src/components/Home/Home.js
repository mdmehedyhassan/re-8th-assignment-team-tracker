import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
            .then(data => setTeams(data.data.teams))
    }, []);
    return (
        <div className='container'>

            <div className='main-home'>

            </div>
            <div className="row">
                {
                    teams.map(team => <AllTeam key={team.idTeam} team={team}></AllTeam>)
                }
            </div>
            <a href="https://github.com/mdmehedyhassan/re-team-tracker" target="blank"><button className="btn btn-light mt-5 mb-3">GitHub link</button></a>

        </div>
    );
};

export default Home;