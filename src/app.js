const app = {
  title: 'Bucket List',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option;

  if(option.value) {
    app.options.push(option.value);

    option.value = '';

    renderApp();
  }
}

const handleRemoveAll = () => {
  app.options = [];
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
      <button onClick={handleRemoveAll}>Remove All</button>
      <ol>
        { app.options.map((option, index) => <li key={index}>{option}</li>) }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  
    
  ReactDOM.render(template, document.getElementById('app'));
}

renderApp();