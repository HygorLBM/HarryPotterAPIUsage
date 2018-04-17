import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './CharacterList';




class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
			characters: []
		};
	};

	//Promisecall
	componentWillMount() {
		fetch('https://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				characters: json
			});
		});
  }

//Input filter
	filter(event){
		this.setState({filter: event.target.value})
  }
  

  render() {

    let characters = this.state.characters;
		if(this.state.filter){
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Challenge 4: Consuming a API (Harry Potter) </h1>
        </header>
        <input className="input" name="search" placeholder="Search a Harry Potter character ..." onChange={this.filter.bind(this)}/>
				<div className= "every-character">
          <ul className="characters-list"> {characters.map(character => 
            <li key={character.name +" (character-list)"}>
              <CharacterList
              name={character.name}
              photo={character.image}
              house={character.house}
              actor={character.actor}
              species={character.species}
              patronus={character.patronus}
              alive={character.alive} />
            </li>)}
          </ul>  
         </div>     
      </div>
    );
  }
}

export default App;
