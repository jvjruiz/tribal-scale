import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

class RadioButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: 'last'
        }
    }

    handleOptionChange(changeEvent) {
        let filterValue = changeEvent.target.value
        this.setState({
            selectedOption: filterValue
        });
        this.props.sortBy(filterValue)
    }


    render() {
        return (
            <div>
            <div>
                <div>
                    <form type='submit'>
                        <div className='radio'>
                            <label>
                                <input type='radio' 
                                value='first' 
                                checked={this.state.selectedOption === 'first'}
                                onChange = {this.handleOptionChange.bind(this)}/>
                                Sort By First Name
                            </label>
                        </div>
                        <div className='radio'>
                            <label>
                                <input type='radio' 
                                value='last' 
                                checked={this.state.selectedOption === 'last'}
                                onChange = {this.handleOptionChange.bind(this)}/>
                                Sort By Last Name
                            </label>
                        </div>
                    </form>
                </div>
            </div>
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
        sortBy: function(filterValue) {
            dispatch(actions.sortBy(filterValue))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RadioButton)