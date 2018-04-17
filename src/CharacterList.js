import React from 'react';
import './App.css';
import alive from './img/alive.jpg'
import dead from './img/dead.png'

class CharacterList extends React.Component {

    preventNone(data){
        if(data == "")
            return  "Unknown/None"
        else
            return data

    }

    alive(data){
        if (data){
            return alive
        }
        else
            return dead
    }


	render(){
		return(
			<div className="each-character">
				<h3> {this.props.name} </h3>
				<img className="character-photo" src={this.props.photo}/>
				<p className="characters-house"> House:  {this.preventNone(this.props.house)} </p>
                <p className="characters-patronus"> Patronus:  {this.preventNone(this.props.patronus)} </p>
                <p className="characters-actor"> Actor:  {this.preventNone(this.props.actor)} </p>
                <img className="character-alive" src={this.alive(this.props.alive)}/>
			</div>
		);
	}
}

export default CharacterList;
