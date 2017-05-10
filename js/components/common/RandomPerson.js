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
        this.props.openModal(this.props.person);
    }

    render() {
        if(this.props.firstOfLetter) {
            return (
                <div>
                    <h1>{this.props.person.name[this.props.currentSortQuery].charAt(0)}</h1>
                    <hr />
                    <li className='random-person' onClick={() => this.openModal()}>
                        <div className = 'random-person-photo-container'>
                            <img src={this.props.person.picture.large} className = 'random-person-photo' />
                        </div>
                        <div className = 'random-person-info'>
                            <p className = 'name'> {this.formatString(this.props.person.name.first)} {this.formatString(this.props.person.name.last)} </p>
                            <p className = 'date-of-birth'>DOB: {this.props.person.dob.split(' ')[0]}</p>
                            <p className = 'location'> {this.formatCity(this.props.person.location.city)}</p>
                        </div>
                    </li>
                </div>
            )
        }
        return (
            <div>
                <li className='random-person' onClick={() => this.openModal()}>
                    <div className = 'random-person-photo-container'>
                        <img src={this.props.person.picture.large} className = 'random-person-photo' />
                    </div>
                    <div className = 'random-person-info'>
                        <p className = 'name'> {this.formatString(this.props.person.name.first)} {this.formatString(this.props.person.name.last)} </p>
                        <p className = 'date-of-birth'>DOB: {this.props.person.dob.split(' ')[0]}</p>
                        <p className = 'location'> {this.formatCity(this.props.person.location.city)}</p>
                    </div>
                </li>
            </div>
        )
    }
}

const mapStateToPops = (state) => {
    return {
        currentSortQuery: state.currentSortQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: function(person) {
            dispatch(actions.modalPerson(person));
            dispatch(actions.toggleModal());
        }
    }
}

export default connect(mapStateToPops,mapDispatchToProps)(RandomPerson);