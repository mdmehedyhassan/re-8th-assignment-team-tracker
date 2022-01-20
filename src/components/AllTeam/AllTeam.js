import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AllTeam = (props) => {
    const { idTeam, strAlternate, strTeamBadge } = props.team;
    const history = useHistory();
    return (
        <div className="col-md-4 col-sm-6 mt-3 mb-3">
            <div style={{ borderRadius: '20px' }} className="text-center p-3 bg-light h-100">
                <img className="w-75" src={strTeamBadge} alt="" />
                <h4>{strAlternate}</h4>
                <p className="text-secondary">sports type: Football</p>
                <button onClick={() => history.push(`/team/${idTeam}`)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default AllTeam;