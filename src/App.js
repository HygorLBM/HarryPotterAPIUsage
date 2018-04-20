import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './CharacterList';




class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
      characters: [],
      offset: 0,
      limit: 4};
	};

	//Promisecall
	componentWillMount() {
		fetch('https://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
        characters: json,
        offset: 0,
        limit: 4
			});
		});
  }

//Input filter
	filter(event){
    this.setState({filter: event.target.value,
                   offset:0,
                   limit:4})
  }
  
  nextPage(){ 
    this.setState({characters: this.state.characters,
                   offset: this.state.offset + 4,
                   limit: this.state.limit + 4 });
  }

  previousPage(){ 
    this.setState({characters: this.state.characters,
                   offset: this.state.offset - 4,
                   limit: this.state.limit - 4 });
  }

  isVisible(parameter, sliced_parameter){ 
    if ((parameter == 0) || (parameter >= sliced_parameter))
      return {visibility: 'hidden'} ;
    else
      return {visibility: 'visible'};
  }




  render() {
    let characters = this.state.characters;

		if(this.state.filter){
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    let sliced = characters.slice(this.state.offset,this.state.limit);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Challenge 4: Consuming a API (Harry Potter) </h1>
        </header>
        <input className="input" name="search" placeholder="Search a Harry Potter character ..." onChange={this.filter.bind(this)}/>
        <div className= "every-character">
          <p className="previousPage" style={this.isVisible(this.state.offset, characters.length)} onClick={this.previousPage.bind(this)}><i class="left"></i></p>
          <ul className="characters-list"> {sliced.map(character => 
            <li key={character.name +" (character-list)"}>
              <CharacterList
                name={character.name}
                photo={character.image}
                house={character.house}
                actor={character.actor}
                patronus={character.patronus}
                 alive={character.alive} 
              />
            </li>)}
          </ul>  
          <p className="nextPage" style={this.isVisible(this.state.limit, characters.length )} onClick={this.nextPage.bind(this)}><i class="right"></i></p>    
         </div> 
         
      </div>
    );
  }
}

export default App;
