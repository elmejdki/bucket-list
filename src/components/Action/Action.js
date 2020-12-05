import React from 'react';

const Action = props => (
  <div>
    <button
      className='big-button'
      onClick={props.handlePick}
      disabled={!props.hasOption}
    >
    What should I do?
    </button>
  </div>
);

Action.displayName = 'Action';

export default Action;