import fetch from 'isomorphic-fetch';

export const FETCH_RANDOM_PEOPLE_ASYNC = 'FETCH_RANDOM_PEOPLE_ASYNC';
export const fetchRandomPeopleAsync = function() {
    return dispatch => {
        return fetch('https://randomuser.me/api/?results=10&seed=tribalScale')
        .then(function(response, error) {
            if(error) {
                dispatch(fetchRandomPeopleError(error))
            }
            let randomPeople = response.json()
            return randomPeople
        })
        .then(function(randomPeople) {
            return dispatch(fetchRandomPeopleSuccess(randomPeople.results))
        })
        .then(function() {
            return dispatch(sortBy('last'));
        })
    }
}

export const FETCH_RANDOM_PEOPLE_SUCCESS = 'FETCH_RANDOM_PEOPLE_SUCCESS';
export const fetchRandomPeopleSuccess = function(randomPeople) {
    return {
        type: FETCH_RANDOM_PEOPLE_SUCCESS,
        payload: randomPeople
    }
}

export const FETCH_RANDOM_PEOPLE_ERROR = 'FETCH_RANDOM_PEOPLE_ERROR';
export const fetchRandomPeopleError = function(error) {
    return {
        type: FETCH_RANDOM_PEOPLE_ERROR,
        payload: error
    }
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = function() {
    return {
        type: TOGGLE_MODAL
    }
}

export const MODAL_PERSON = 'MODAL_PERSON';
export const modalPerson = function(person) {
    return {
        type: MODAL_PERSON,
        payload: person
    }
}

export const SORT_BY = 'SORT_BY';
export const sortBy = function(filterValue) {
    return {
        type: SORT_BY,
        payload: filterValue
     }
}

export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const updateSearchString = function(string) {
    return {
        type: UPDATE_SEARCH_STRING,
        payload: string
    }
}