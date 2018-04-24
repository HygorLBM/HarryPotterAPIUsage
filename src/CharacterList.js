import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import Character from './Character';
import {createStore} from 'redux';
import {handleNextPage} from './Actions';
import {handlePreviousPage} from './Actions';
import {connect} from 'react-redux';
import { SearchCharacters } from './SearchCharacters';

const LIMIT = 4

export const CharacterList = ({filtered, offset, onPreviousPage, onNextPage}) =>{

    function renderPreviousPage(){
        if (offset === 0)
        {
            <i class="left" onClick={onPreviousPage()}></i>
        }
    }

    function renderNextPage(){
        if (offset + LIMIT >= filtered.length)
        {
            <i class="right" onClick={onNextPage()}></i>
        }

    }

    console.log(filtered);
    console.log(offset);
    return(
        
        <div className= "everyCharacter">
        <div className="previousPage"> {renderPreviousPage}</div>
            <div className="characterList">
                <ul>
                    {
                        filtered.slice(offset,offset + LIMIT)
                                .map(character =>{
                                    console.log(character);
                                    return (
                                        <div>
                                            <li key={character.name +" (characterList)"}>
                                            <Character character={character} />
                                            </li>
                                        </div>
                                    )
                                }
                        )
                    }
            </ul>
            </div>
        <div className="nextPage"> {renderNextPage}</div>  
        </div>
    );
 }
 
  CharacterList.defaultProps = {
    filtered: [],
    offset: 0
}
 
 const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        filtered: state.filtered,
        offset: state.offset
    };
 }

 const mapDispatchToProps = (dispatch) => (
    {
      onPreviousPage: () => dispatch(handlePreviousPage()),
      onNextPage: () => dispatch(handleNextPage())
    }
);
 
 export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
 