import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import RandomPerson from './RandomPerson'

class RandomPersonList extends Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    renderHeaders() {
        let people = this.props.currentRandoms;
        let sortFilter = this.props.currentSortQuery;
        let searchString = this.props.currentSearchString;
        if(searchString !== '') {
             people = people.filter(function(person) {
                return person.name.first.indexOf(searchString) >= 0 || person.name.last.indexOf(searchString) >= 0
            });   
        }
        return people.map((person,index,array) => {
            let currentHeader = person.name[sortFilter].charAt(0);
            let currentLetter = array[index].name[sortFilter].charAt(0);
            if(index === 0) {
                return (
                    <div key={index} className='letter-container'>
                        <h1>{currentHeader.toUpperCase()}</h1>
                        <hr />
                        <ul className='people-container'>
                            {this.renderPeople(currentHeader,people)}
                        </ul>
                    </div>
                )
            }
            else if(array[index].name[sortFilter].charAt(0) !== array[index-1].name[sortFilter].charAt(0)) {
                currentHeader = currentLetter
                return (
                    <div key={index} className='letter-container'>
                        <h1>{currentHeader.toUpperCase()}</h1>
                        <hr />
                        <ul className='people-container'>
                            {this.renderPeople(currentHeader,people)}
                        </ul>
                    </div>
                )
            }
        })
    }

    renderPeople(currentHeader,people) {
        console.log('rendering people')
        let sortFilter = this.props.currentSortQuery;

        return people.map((person, index, array) => {
            if(currentHeader === person.name[sortFilter].charAt(0)) {
                return (
                    <RandomPerson
                        person={person}
                        key={index*2}
                     />
                )
            }
        })
    }

    render() {
        return (
            <div>
                <ul className='list-container'>
                    {this.renderHeaders()}
                </ul>
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