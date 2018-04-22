import React from 'react';
import PropTypes from 'prop-types';
import StageList from './StageList';
import MatchList from './MatchList';

const MatchArea = ({ matches, latestMatchDay, numberOfMatchDay, handleOnChange }) => {
    return (
        <div>
            <StageList latestMatchDay={latestMatchDay}
                numberOfMatchDay={numberOfMatchDay}
                handleOnChange={handleOnChange}/>
            <MatchList matches={matches} />
        </div>
    ); 
};

MatchArea.propTypes = {
    matches: PropTypes.array.isRequired,
    latestMatchDay: PropTypes.number.isRequired,
    numberOfMatchDay: PropTypes.number.isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default MatchArea;