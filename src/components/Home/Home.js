import React, { useContext } from 'react';
import { TeamContext } from '../../App';
import AllTeam from '../AllTeam/AllTeam';
import './Home.css'

const Home = () => {
    const teams = useContext(TeamContext);
    return (
        <div className='container'>
            <div className='main-home'>
               
            </div>
            <div className="row">
                {
                    teams.map(team => <AllTeam key={team.idTeam} team={team}></AllTeam>)
                }
            </div>
        </div>
    );
};

export default Home;