import React from 'react';

const Option = (props) => {
  return (
    <li>
      {props.option}
      <button
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default Option;
