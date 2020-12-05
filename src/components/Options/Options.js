import React from 'react';
import Option from '../Option/Option';

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {
      props.list.length === 0 &&
      <p className='widget__message'>
        Please add some data to get started!.
      </p>
    }
    {props.list.map(
      (item, index) => {
        return <Option
                key={index}
                count={index}
                option={item}
                handleDeleteOption={props.handleDeleteOption}
              />
      }
    )}
  </div>
);

Options.displayName = 'Options';

export default Options;