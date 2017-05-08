import React, {Component, PropTypes} from 'react';

export default class RandomPerson extends Component {
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

    render() {
        return (
            <div>
            <li className='random-person'>
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