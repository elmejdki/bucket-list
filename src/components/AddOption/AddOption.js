import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: null
  }

  handleAddOption = (e) => {
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