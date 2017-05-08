import * as actions from '../actions/index';
console.log(actions)
const initialState = {
	isLoading: false,
	currentRandoms: [],
	currentFilter: "",
	error: "",
};

export default function reducer(state = initialState, action) {
    var newState
    function assignState(newState) {
        return Object.assign({}, state, newState);
    }

    console.log(action.type)
    switch(action.type) {
        
        case 'FETCH_RANDOM_PEOPLE_SUCCESS':
            let randomPeople = action.payload;
            console.log(randomPeople)
            return assignState({
                currentRandoms:randomPeople
            })

        default: 
            return state;
    }
}