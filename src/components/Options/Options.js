import React from 'react';
import Option from '../Option/Option';

const Options = (props) => (
  <div>
    <button
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    <p>
      {
        props.list.length === 0 &&
        'Please add some data to get started!.'
      }
    </p>
    <ol>
      {props.list.map(
        (item, index) => {
          return <Option 
                  key={index}
                  option={item}
                  handleDeleteOption={props.handleDeleteOption}
                />
        }
      )}
    </ol>
  </div>
);

export default Options;