import React, { Component } from 'react';
import AddOption from '../AddOption/AddOption';
import Header from '../Header/Header';
import Action from '../Action/Action';
import Options from '../Options/Options';

export default class App extends Component {
  state = {
    options: []
  }

  handlePick = () => {
    const { options } = this.state;
    const optionIndex = Math.floor(
      Math.random() * options.length
    );

    const option = options[optionIndex];
    alert(option);
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item.';
    }else if (this.state.options.indexOf(option) > -1) {
      return 'The item already exists.';
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(
        option => optionToRemove !== option
      )
    }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
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