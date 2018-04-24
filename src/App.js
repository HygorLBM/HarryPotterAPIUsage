import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterList } from './CharacterList';
import {SearchCharacters} from './SearchCharacters';
import { handleChangeSearchInput, handleFetch } from './Actions';
import {connect} from 'react-redux';
import axios from 'axios';


const LIMIT = 4;

class App extends Component {

	// Promisecall
	async componentDidMount() {
    try {
      const result = await axios.get('http://hp-api.herokuapp.com/api/characters');
      this.props.onFetch(result.data);
    } catch (error) {
      console.log(error);
    }
  }

/*  componentDidMount() {
    const self = this;
    axios.get('http://hp-api.herokuapp.com/api/characters').then(function(result) {
      console.log(result.data);
      self.props.onFetch(result.data);
    }).catch(function(error) {
      console.log(errore);
    });
  }*/

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Challenge 4: Consuming a API (Harry Potter) </h1>
        </header>

        <SearchCharacters/>
        <CharacterList/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    onFetch: (request) => dispatch(handleFetch(request))
  }
);

export default connect(undefined, mapDispatchToProps)(App);
