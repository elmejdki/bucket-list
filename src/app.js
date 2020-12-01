class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    }

    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handlePick() {
    const { options } = this.state;
    const optionIndex = Math.floor(
      Math.random() * options.length
    );

    const option = options[optionIndex];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item.';
    }else if (this.state.options.indexOf(option) > -1) {
      return 'The item already exists.';
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  render() {
    const title = 'Bucket List';
    const subtitle = 'Put your life on the hands of a computer.';
    const { options } = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={!!options.length}
          handlePick={this.handlePick}
        />
        <Options
          list={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOption}
      >
      What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
      <p>
        {
          props.list.length > 0 ?
          'Here are your options' :
          'No Options'
        }
      </p>
      <ol>
        {props.list.map(
          (item, index) => <Option key={index} option={item} />
        )}
      </ol>
    </div>
  );
}

const Option = (props) => {
  return <li>{props.option}</li>
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }

    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();

    const input = e.target.elements.option;
    const option = input.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    input.value = '';
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        { error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
