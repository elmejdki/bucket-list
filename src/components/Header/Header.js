import React from 'react';

const Header = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </div>
);

export default Header;