import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';
import WordBank from './components/WordBank/WordBank';

class App extends Component {
  
  state = {
    loading: true,
    word: [],
  };
 
 async componentDidMount () {
    const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({word: data, loading: false });
    console.log(data[0].meta.id.target);
    console.log(data[1]);
  }
  
  render() {
    return (
      <div>
        <Home />
        <WordBank />
        {/* {this.state.loading || !this.state.word ? 
        (<div>loading...</div>) : <div>{this.state.word.meta.id} is  {this.state.word.shortdef}</div>} */}
        <Form />
      </div>
    );
  }
}

export default App;
