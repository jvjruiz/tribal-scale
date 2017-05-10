import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RandomPersonList from '../js/components/common/RandomPersonList';
import { People } from './seed-data';

describe('RandomPersonList Connected Component', () => {
    const mockStore = configureStore();
    let initialState  = {
        currentRandoms: People,
        currentSortQuery: 'last',
        currentSearchString: ''
    }
    let store;
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<RandomPersonList store={store} />)
    })

    it('render the connected(RandomPerson) component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('check props matches with intialState', () => {
        expect(wrapper.prop('currentRandoms')).toEqual(People);
        expect(wrapper.prop('currentRandoms').length).toEqual(2);
        expect(wrapper.prop('currentSearchString')).toEqual('');
        expect(wrapper.prop('currentSortQuery')).toEqual('last');   
    })
})