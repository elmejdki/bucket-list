class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    }

    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.log('localStorage is not clean, error: ' + e.message)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
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

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(
        option => optionToRemove !== option
      )
    }))
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
          handleDeleteOption={this.handleDeleteOption}
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
          props.list.length > 0 &&
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
}

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
