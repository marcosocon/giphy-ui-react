import React from 'react';
import { Segment, Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

function Loader({ classes }) {
  return (
    <div className={classes}>
      <SemanticLoader active inline="centered">
        Loading...
      </SemanticLoader>
    </div>
  )
}

export default Loader;
