import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';
// import WordBank from './components/WordBank/WordBank';

class App extends Component {
  
  state = {
    loading: true,
    // holds response we get back from the API
    wordArray: [],
  };
 

      //*********************API CALL*********** */

 async componentDidMount () {
    
  
// // OLD WAY OF CALLING THE API
  // const url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=49100cd7-ffd4-4401-a19c-f3d89af225bb`;

  const url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb`;
 const response = await fetch(url);
    const data = await response.json();
    this.setState({word: data, loading: false });
    console.log(data[0].meta.id);
    console.log(data[1]);
    console.log(data);
  }

addWord = (wordDef) => {
this.setState (prevState => ({
wordArray : [prevState.wordArray, wordDef]

}));
}

  render() {
        var someData = this.state.data;

        return (
          <div> 
            <Home />
            {/* {this.state.loading || !this.state.word ? 
            (<div>loading...</div>) : <div>{this.state.word.meta.id} is  {this.state.word.shortdef}</div>} */}
            <Form />
            <h1>Word:{someData}</h1>
            <h2>Defintion:{this.state.data}</h2>
          </div>
        );
  }
}

export default App;
