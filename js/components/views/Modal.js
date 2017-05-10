import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

class Modal extends Component {
    closeModal() {
        return this.props.closeModal();
    }
    
    formatString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        if(this.props.modalOpen) {
            let person = this.props.modalPerson;
            return (
            <div className='modal'>
                <div className='modal-picture-container'>
                    <img src={person.picture.large} className='modal-picture' />
                </div>
                <div className='modal-person-info-container'>
                    <h1 className='modal-person-header'>{this.formatString(person.name.first)} {this.formatString(person.name.last)}</h1>
                    <p className='modal-person-info'>DOB: {person.dob.split(' ')[0]} </p>
                    <p className='modal-person-info'>PH#: {person.phone}</p>
                    <p className='modal-person-info'>Address: {person.location.street.split(' ')[0]} {this.formatString(person.location.street.split(' ')[1])} {this.formatString(person.location.street.split(' ')[2])} {this.formatString(person.location.city)}, {this.formatString(person.location.state)}</p>
                    <p className='modal-person-info'>E-mail: {person.email}</p>
                    <p className='modal-person-info'>UserName: {person.login.username}</p>
                </div>
                <div className='modal-x' onClick={this.closeModal.bind(this)}>
                    X
                </div>
            </div>
            )
        } else {
            return (
                null
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.modalOpen,
        modalPerson: state.modalPerson
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: function() {
            dispatch(actions.toggleModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)