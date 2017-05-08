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

export const SORT_BY_FIRST_NAME = 'SORT_BY_FIRST_NAME';
export const sortByFirstName = function() {
    return {
        type: SORT_BY_FIRST_NAME,
    }
}

export const SORT_BY_LAST_NAME = 'SORT_BY_LAST_NAME';
export const sortByLastName = function(randoms) {
    return {
        type: SORT_BY_LAST_NAME,
        payload:randoms
    }
}