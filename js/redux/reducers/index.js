import * as actions from '../actions/index';
console.log(actions)
const initialState = {
	isLoading: false,
	currentRandoms: [],
	currentFilter: "",
	error: "",
};

export default function reducer(state = initialState, action) {
    let newState = {};
    let people = state.currentRandoms;
    function assignState(newState) {
        return Object.assign({}, state, newState);
    }


    console.log(action.type)
    switch(action.type) {
        
        case 'FETCH_RANDOM_PEOPLE_SUCCESS':
            let randomPeople = action.payload;
            randomPeople.sort(function(a,b) {
                let firstNameA = a.name.first;
                let firstNameB = b.name.first;
                if(firstNameA < firstNameB) {
                    return -1;
                }
                if(firstNameA > firstNameB) {
                    return 1;
                }
                return 0;
            });
            return assignState({
                currentRandoms:randomPeople
            })

        case 'SORT_BY_FIRST_NAME':
            people.sort(function(a,b) {
                let firstNameA = a.name.first;
                let firstNameB = b.name.first;
                if(firstNameA < firstNameB) {
                    return -1;
                }
                if(firstNameA > firstNameB) {
                    return 1;
                }
                return 0;
            });
            console.log(people)
            return assignState({
                currentRandoms: people
            })
        
        case 'SORT_BY_LAST_NAME':
            let sortedByLastName = action.payload.sort(function(a,b) {
                let firstNameA = a.name.last;
                let firstNameB = b.name.last;
                if(firstNameA < firstNameB) {
                    return -1;
                }
                if(firstNameA > firstNameB) {
                    return 1;
                }
                return 0;
            });
            console.log(sortedByLastName)
            return Object.assign({}, state, {
                currentRandoms:sortedByLastName,
            })

        default: 
            return state;
    }
}