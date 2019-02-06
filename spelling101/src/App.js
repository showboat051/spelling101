import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';

class App extends Component {
  
 

  // state = {
  //   meta: undefined,
  //   syn_list: undefined,
  //   wsls: undefined,
  //   rel_list: undefined,
  //   list: undefined,
  //   error: undefined,
  // };

  // getWord = async (e) => {
  //   e.preventdefault();
  //   const word = e.target.elements.word.value;

  //   // const api_key = "49100cd7-ffd4-4401-a19c-f3d89af225bb";
  //   // https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb
  //   const api_call = await fetch('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=49100cd7-ffd4-4401-a19c-f3d89af225bb');
  //   const data = await api_call.json();



  //   if (word) {
  //     console.log (data);
  //     this.setState({
  //       meta: data.target,
  //     });
  //   } else {
  //     console.log(data);
  //     this.setState({
  //       meta: undefined,
  //       error: "You didn't enter a word."
  //     });
  //   }
  // }
  
    constructor() {
      super();
      this.state = { data: [] };
    }
    componentDidMount() {
      fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
        
    }

  render() {
    return (
      <div>
        {/* <Form getWord={this.getWord} /> */}
          
        <Home />
        <p>Enter your word here </p> <Form />
      </div>
    );
  }
}

export default App;
