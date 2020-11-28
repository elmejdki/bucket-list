'use strict';

console.log('App.js is running!!');

// JSX - JavaScript XML

var template = React.createElement(
  'h1',
  null,
  'This is JSX from app.js'
);

ReactDOM.render(template, document.getElementById('app'));
