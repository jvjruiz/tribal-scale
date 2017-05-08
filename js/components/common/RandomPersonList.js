import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import RandomPerson from './RandomPerson'

class RandomPersonList extends Component {
    componentDidMount() {
        this.props.fetchPeople();
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
            <div className = "people-container">
                <ul>
                    {this.renderPeople()}
                </ul>
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
            dispatch(actions.fetchRandomPeopleAsync())
        }
    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPersonList);