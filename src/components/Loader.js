import React from 'react';
import PropTypes from 'prop-types';
import { Loader as SemanticLoader } from 'semantic-ui-react';

function Loader({ classes }) {
  return (
    <div className={classes}>
      <SemanticLoader active inline="centered">
        Loading...
      </SemanticLoader>
    </div>
  )
}

Loader.propTypes = {
  classes: PropTypes.string,
};

Loader.defaultProps = {
  classes: '',
};

export default Loader;
