import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Form from './components/Form';

class App extends Component {
  
  state = {
    loading: true
  }
 
 async componentDidMount () {
    const url = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  


    
    

    // componentDidMount() {
    //   fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/test?key=49100cd7-ffd4-4401-a19c-f3d89af225bb`)
    //     .then(res => res.json())
    //     .then(json => this.setState({ data: json }));
          
    // }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>word...</div>}
      </div>
    );
  }
}

export default App;
