import React from 'react';
import PropTypes from 'prop-types';

class ErrorArea extends React.Component {

  render() {
    return (
      <div>
        {this.props.error}
      </div>
    );
  }
}

ErrorArea.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorArea;
