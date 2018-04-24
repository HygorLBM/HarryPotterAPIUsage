import React from 'react';
import './App.css';
import alive from './img/alive.jpg'
import dead from './img/dead.png'

const Character = ({character}) =>{

    function preventNone(data){
        if(data == "")
            return  "Unknown/None"
        else
            return data

    }

    function verifyStatus(data){
        if (data){
            return alive
        }
        else
            return dead
    }

    return(
        <div className="eachCharacter">
            <h3> {character.name} </h3>
            <img className="characterPhoto" src={character.photo}/>
            <p className="charactersHouse"> House:  {this.preventNone(character.house)} </p>
            <p className="charactersPatronus"> Patronus:  {this.preventNone(character.patronus)} </p>
            <p className="charactersActor"> Actor:  {this.preventNone(character.actor)} </p>
            <img className="characterAlive" src={this.alive(character.verifyStatus)}/>
        </div>
	);
    
}


export default Character;
