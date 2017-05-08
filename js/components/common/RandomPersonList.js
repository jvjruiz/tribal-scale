import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import RandomPerson from './RandomPerson'

class RandomPersonList extends Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    sortByFirstName() {
        this.props.sortByFirstName();
    }

    sortByLastName() {
        this.props.sortByLastName(this.props.currentRandoms);
    }

    renderPeople() {
        let people = this.props.currentRandoms;
        return people.map((person, index) => {
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
                <button onClick = {this.sortByFirstName.bind(this)}>first name</button>
                <button onClick = {this.sortByLastName.bind(this)}>last name</button>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: function() {
            dispatch(actions.fetchRandomPeopleAsync());
        },
        sortByFirstName: function() {
            dispatch(actions.sortByFirstName());
        },
        sortByLastName: function(currentRandoms) {
            dispatch(actions.sortByLastName(currentRandoms));
        }

    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPersonList);