import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

class RandomPerson extends Component {
    formatString(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    formatCity(city) {
        let cityArray = city.split(' ');
        let formattedCityString = '';
        for(let i = 0;i<cityArray.length;i++) {
            formattedCityString += this.formatString(cityArray[i]) + ' '
        }
        return formattedCityString
    }

    openModal() {
        let person = this.props.person
        if(!this.props.modalOpen){
            this.props.openModal(person);
        }
        else {
            this.props.changeModal(person)
        }
    }

    render() {
        let person = this.props.person
        return (
                <li className='person' onClick={() => this.openModal()}>
                    <div className = 'person-photo-container'>
                        <img src={person.picture.large} className = 'person-photo' />
                    </div>
                    <div className = 'person-info'>
                        <p className = 'name'> {this.formatString(person.name.first)} {this.formatString(person.name.last)} </p>
                        <p className = 'date-of-birth'>DOB: {person.dob.split(' ')[0]}</p>
                        <p className = 'location'> {this.formatCity(person.location.city)}</p>
                    </div>
                </li>
        )
    }
}

const mapStateToPops = (state) => {
    return {
        modalOpen: state.modalOpen,
        currentSortQuery: state.currentSortQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: function(person) {
            dispatch(actions.modalPerson(person));
            dispatch(actions.toggleModal());
        },
        changeModal: function(person) {
            dispatch(actions.modalPerson(person));
        }
    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPerson);