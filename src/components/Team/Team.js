import React, { useEffect, useState } from 'react';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faGlobe, faSearchLocation, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Team = () => {
    const { id } = useParams();
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
            .then(data => setTeams(data.data.teams))
    }, []);
    const myTeam = teams.find(team => team.idTeam === id);
    const teamDivStyle = {
        height: '300px',
        backgroundImage: `url(${myTeam?.strStadiumThumb})`,
        backgroundSize: 'cover',
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={teamDivStyle}>
                <img className="h-75" src={myTeam?.strTeamBadge} alt="" />
            </div>
            <div className="text-light mt-5 mb-5">
                <div style={{borderRadius: '20px'}} className="row bg-primary p-3">
                    <div className="col-md-6">
                        <h4>{myTeam?.strAlternate}</h4>
                        <p><FontAwesomeIcon icon={faSearchLocation} /> Founded: {myTeam?.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {myTeam?.strCountry}</p>
                        <p><FontAwesomeIcon icon={faTransgender} /> Gender: {myTeam?.strGender}</p>
                    </div>
                    <div className="col-md-6">
                        <img style={{borderRadius: '10px'}} className="w-100" src={myTeam?.strTeamFanart4} alt="" />
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <p style={{ textAlign: "justify" }}><strong className="text-danger">Team Information: </strong>{myTeam?.strDescriptionEN}</p>
                    <p style={{ textAlign: "justify" }}><strong className="text-danger">Stadium Information: </strong>{myTeam?.strStadiumDescription}</p>
                </div>
                <div className="text-center">
                    <a style={{fontSize: '40px', padding: '5px'}} href={`https://${myTeam?.strTwitter}`} target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a style={{fontSize: '40px', padding: '5px', color: 'white'}} href={`https://${myTeam?.strWebsite}`}  target="blank"><FontAwesomeIcon icon={faGlobe} /></a>
                    <a style={{fontSize: '40px', padding: '5px', color: 'red'}} href={`https://${myTeam?.strYoutube}`}  target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default Team;