import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';
// import WordBank from './components/WordBank/WordBank';

class App extends Component {
  
  state = {
    loading: true,
    input: [],
  };
 
                                                    //OLD LIFECYCLE FUNCTION
 async componentDidMount () {
    
  
//   // OLD WAY OF CALLING THE API
  const url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb`;
    
  const response = await fetch(url);
    const data = await response.json();
    this.setState({input: data, loading: false });
  

    console.log(data[0]);
    console.log(data[1]);
  }



 

  
  render() {


      
        var someData = this.state.data;

        return (
          <div> 
            <Home />
            {/* {this.state.loading || !this.state.word ? 
            (<div>loading...</div>) : <div>{this.state.word.meta.id} is  {this.state.word.shortdef}</div>} */}
            <Form />
            <h1>{someData}</h1>
          </div>
        );
  }
}

export default App;
