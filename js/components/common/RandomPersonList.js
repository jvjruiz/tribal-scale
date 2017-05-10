import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import RandomPerson from './RandomPerson'

var ReactRenderVisualizer = require("react-render-visualizer")

class RandomPersonList extends Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    renderPeople() {
        console.log('rendering people')
        let people = this.props.currentRandoms;
        let searchString = this.props.currentSearchString;
        let sortFilter = this.props.currentSortQuery;
        let firstOfLetter; 
        if(searchString !== '') {
             people = people.filter(function(person) {
                return person.name.first.indexOf(searchString) >= 0 || person.name.last.indexOf(searchString) >= 0
            });   
        }
        return people.map((person, index, array) => {
            console.log(sortFilter)
            console.log(index)
            if(index === 0) {
                firstOfLetter = true;
            } 
            else if(array[index].name[sortFilter].charAt(0) !== array[index-1].name[sortFilter].charAt(0)) {
                firstOfLetter = true;
            }
            else {
                firstOfLetter = false;
            }
            return (
                <RandomPerson
                    key = {index} 
                    person = {person}
                    className = 'random-person'
                    firstOfLetter = {firstOfLetter}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div className = "people-container">
                    <ul className = "people-container">
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
        openModal: function(person) {
            dispatch(actions.modalPerson(person));
            dispatch(actions.toggleModal());
        }
    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPersonList);