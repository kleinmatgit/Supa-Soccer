import React from 'react';
import PropTypes from 'prop-types';

const ErrorArea = ({error}) => {
    return (
        <div>
            {error}
        </div>
    );
};

ErrorArea.propTypes = {
    error: PropTypes.string.isRequired
};

export default ErrorArea;