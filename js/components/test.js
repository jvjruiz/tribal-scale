import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import * as actions from '../redux/actions/index';

class Test extends Component {
    onClick() {
        this.props.testAction();
    }

    onClick2() {
        console.log(this.props.currentRandoms)
    }

    render() {
        return (
            <div>
                <button onClick = {this.onClick.bind(this)} >Press me!</button>
                <button onClick = {this.onClick2.bind(this)}>hello</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        currentRandoms: state.currentRandoms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: function() {
            dispatch(actions.fetchRandomPeopleAsync())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);