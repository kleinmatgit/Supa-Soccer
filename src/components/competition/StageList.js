import React from 'react';
import PropTypes from 'prop-types';

const StageList = ({ latestMatchDay, numberOfMatchDay,handleOnChange }) => {
    var optionList = [];
    for (var i = latestMatchDay; i > 0; i--) {
        optionList.push(
            <option key={i-1} value={i}>MatchDay {i} of {numberOfMatchDay}</option>
        );
    }
    return (
        <div>
            <select className="form-control"
                id="sel1"
                onChange={handleOnChange}>
                {optionList}
            </select>
        </div>
    );
};

StageList.propTypes = {
    latestMatchDay: PropTypes.number.isRequired,
    numberOfMatchDay: PropTypes.number.isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default StageList;