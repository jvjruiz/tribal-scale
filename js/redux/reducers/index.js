import * as actions from '../actions/index';
console.log(actions)
const initialState = {
	isLoading: false,
	currentRandoms: [],
	currentSearchString: "",
    currentSortQuery: "",
	error: "",
};

export default function reducer(state = initialState, action) {
    let newState;

    console.log(state)


    console.log(action.type)
    switch(action.type) {
        
        case 'FETCH_RANDOM_PEOPLE_SUCCESS':
            let randomPeople = action.payload;
            
            return {...state, currentRandoms: randomPeople}

        case 'SORT_BY':
            let people = state.currentRandoms.concat();
            if(action.payload === "firstName") {
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
            } else if(action.payload === 'lastName') {
                people.sort(function(a,b) {
                    let lastNameA = a.name.last;
                    let lastNameB = b.name.last
                    if(lastNameA < lastNameB) {
                        return -1;
                    }
                    if(lastNameA > lastNameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            console.log(people)
            return {...state, currentRandoms:people, currentSortQuery: action.payload}
        
        case 'UPDATE_SEARCH_STRING':
            let searchString = action.payload
            return {...state, currentSearchString:searchString}

        default: 
            return state;

    }
}