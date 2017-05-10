import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

class SeedButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seed:''
        }
    }

    handleChange(e) {
        this.setState({seed:e.target.value})
    }

    onClick() {
        this.props.fetchWithSeed(this.state.seed)
    }

    render() {
        return (
            <div className='seed-bar'>
                <input type='text' onChange={this.handleChange.bind(this)} placeholder='Type in seed value' /> 
                <button onClick={this.onClick.bind(this)}>Click me!</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWithSeed: function(seed) {
            dispatch(actions.fetchRandomPeopleAsync(seed))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SeedButton);
