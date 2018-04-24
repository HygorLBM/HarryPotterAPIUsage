import './index.css';
import {Reducer} from 'redux';

const LIMIT = 4;

const chars = (state= [] , action) => {
    switch (action.type){
      case 'FETCH_ALL':
        return [
           ...state,
          {
            characters: action.payload.data,
            filtered: action.payload.data,
            offset: 0
          },
        ];

      case 'FILTER_CHARACTERS':
        return  [
            ...state,
           {
             filtered: state.characters.filter( character => character.name.toLowerCase().includes(action.toFilter)),
             offset: 0
           },
         ];   

      case 'NEXT_PAGE':
        return  [
        ...state,
       {
         offset: state.offset + LIMIT
       },
     ];   
  
     case 'PREVIOUS_PAGE':
        return  [
        ...state,
       {
         offset: state.offset - LIMIT
       },
     ];   
  };
}


export default chars;