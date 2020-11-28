'use strict';

var app = {
  title: 'Bucket List',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option;

  if (option.value) {
    app.options.push(option.value);

    option.value = '';

    renderApp();
  }
};

var handleRemoveAll = function handleRemoveAll() {
  app.options = [];
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options && app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
      'button',
      { onClick: handleRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: index },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
