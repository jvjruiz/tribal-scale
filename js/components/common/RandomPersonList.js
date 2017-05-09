import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import RandomPerson from './RandomPerson'

var ReactRenderVisualizer = require("react-render-visualizer")

class RandomPersonList extends Component {
    componentDidMount() {
        console.log('didmount')
        this.props.fetchPeople();
    }

    renderPeople() {
        console.log('rendering people')
        let people = this.props.currentRandoms;
        let searchString = this.props.currentSearchString; 
        if(searchString !== '') {
             people = people.filter(function(person) {
                return person.name.first.indexOf(searchString) >= 0 || person.name.last.indexOf(searchString) >= 0
            });   
        }
        return people.map((person, index, array) => {
            return (
                <RandomPerson
                    key = {index} 
                    person = {person}
                    className = 'random-person'
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div className = "people-container">
                    <ul>
                        {this.renderPeople()}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToPops = (state) => {
    return {
        currentRandoms: state.currentRandoms,
        currentSearchString: state.currentSearchString,
        currentSortQuery: state.currentSortQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: function() {
            dispatch(actions.fetchRandomPeopleAsync());
        },
    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPersonList);