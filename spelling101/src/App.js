import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';

class App extends Component {
  
  state = {
    loading: true,
    word: [],
  };
 
 async componentDidMount () {
    const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({word: data[0], loading: false });
    console.log(data[0]);
    console.log(data[0]);
  }
  
  render() {
    return (
      <div>
        <Home />
        {this.state.loading || !this.state.word ? (
        <div>loading...</div>) : <div>{this.state.word.meta.id} is  {this.state.word.shortdef}</div>}
        <Form />
      </div>
    );
  }
}

export default App;
