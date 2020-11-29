class App extends React.Component {
  render() {
    const title = 'Bucket List';
    const subtitle = 'Put your life on the hands of a computer.';
    const options = ['Thing one', 'Thing Two'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options list={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>
          {
            this.props.list.length > 0 ?
            'Here are your options' :
            'No Options'
          }
        </p>
        <ol>
          {this.props.list.map(
            (item, index) => <Option key={index} option={item} />
          )}
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    if(e.target.elements.option.value) {
      alert('hi');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));