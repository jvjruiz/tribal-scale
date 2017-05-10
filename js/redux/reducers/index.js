import * as actions from '../actions/index';
const initialState = {
	isLoading: false,
	currentRandoms: [],
	currentSearchString: "",
    currentSortQuery: "last",
    modalOpen: false,
    modalPerson: {},
	error: "",
};

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        
        case 'FETCH_RANDOM_PEOPLE_SUCCESS':
            let randomPeople = action.payload;
            return { ...state, currentRandoms: randomPeople }

        case 'TOGGLE_MODAL':
            let updatedModalState = !state.modalOpen;
            return { ...state, modalOpen:updatedModalState }
        
        case 'MODAL_PERSON':
            let modalPerson = action.payload;
            return { ...state, modalPerson:modalPerson }

        case 'SORT_BY':
            let people = state.currentRandoms.concat();
            if(action.payload === "first") {
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
            } else if(action.payload === 'last') {
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
            return {...state, currentRandoms:people, currentSortQuery: action.payload}
        
        case 'UPDATE_SEARCH_STRING':
            let searchString = action.payload
            return {...state, currentSearchString:searchString}

        default: 
            return state;

    }
}