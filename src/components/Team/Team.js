import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faGlobe, faSearchLocation, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { TeamContext } from '../../App';

const Team = () => {
    const { id } = useParams();
    const teams = useContext(TeamContext);
    const myTeam = teams.find(team => team.idTeam === id);
    const { strAlternate, intFormedYear, strCountry, strGender, strStadiumThumb, strTeamBadge, strTeamFanart4, strDescriptionEN, strStadiumDescription, strTwitter, strWebsite, strYoutube } = myTeam;
    const teamDivStyle = {
        height: '300px',
        backgroundImage: `url(${strStadiumThumb})`,
        backgroundSize: 'cover',
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={teamDivStyle}>
                <img className="h-75" src={strTeamBadge} alt="" />
            </div>
            <div className="text-light mt-5 mb-5">
                <div style={{borderRadius: '20px'}} className="row bg-primary p-3">
                    <div className="col-md-6">
                        <h4>{strAlternate}</h4>
                        <p><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faTransgender} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6">
                        <img style={{borderRadius: '10px'}} className="w-100" src={strTeamFanart4} alt="" />
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <p style={{ textAlign: "justify" }}><strong className="text-danger">Team Information: </strong>{strDescriptionEN}</p>
                    <p style={{ textAlign: "justify" }}><strong className="text-danger">Stadium Information: </strong>{strStadiumDescription}</p>
                </div>
                <div className="text-center">
                    <a style={{fontSize: '40px', padding: '5px'}} href={`https://${strTwitter}`} target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a style={{fontSize: '40px', padding: '5px', color: 'white'}} href={`https://${strWebsite}`}  target="blank"><FontAwesomeIcon icon={faGlobe} /></a>
                    <a style={{fontSize: '40px', padding: '5px', color: 'red'}} href={`https://${strYoutube}`}  target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default Team;