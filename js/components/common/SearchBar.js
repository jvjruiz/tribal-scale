import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

class SearchBar extends Component {
    onChange(e) {
        let string = e.target.value.toLowerCase()
        this.props.updateSearchString(string)
    }

    render() {
        return (
            <input type='text' className='search-bar' placeholder='Search...' onChange={this.onChange.bind(this)} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchString: function(string) {
            dispatch(actions.updateSearchString(string))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);