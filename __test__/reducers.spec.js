import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { People,SortedPeople } from './seed-data';

import reducer from '../js/redux/reducers/index';

describe('Reducer tests', () => {
    it('test reducer for success of fetching from api', () => {
        let state = {currentRandoms:[]}
        state = reducer(state,{type:'FETCH_RANDOM_PEOPLE_SUCCESS',payload:People})
        expect(state).toEqual({currentRandoms:People})
    })
    it('test reducer for sorting people', () => {
        let state = {currentRandoms: People,currentSortQuery:'last'}
        state = reducer(state,{type:'SORT_BY',payload:'first'});
        expect(state).toEqual({currentRandoms:SortedPeople,currentSortQuery:'first'})
    })
});