import React, {Component} from 'react';
import { connect } from 'react-redux';
import {handleChangeSearchInput} from './Actions';
import './App.css';
import './CharacterList';


export class SearchCharacters extends Component {
    state = {
        filterText: ''
    }

    
    onChange() {
        return this.props.onSearchChangeInput(this.state.filterText)
    }

    render() {
        return(
            <input
                placeholder="Search a Harry Potter character ..."
                className="searchInput"
                value={this.state.filterText}
                onChange={this.onChange}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
      onSearchChangeInput: (filterText) => dispatch(handleChangeSearchInput(filterText))
    }
  );


export default connect(undefined, mapDispatchToProps)(SearchCharacters)
