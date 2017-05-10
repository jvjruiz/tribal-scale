import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RandomPerson from '../js/components/common/RandomPerson';
import { Person } from './seed-data';


describe('RandomPerson Connect Component', () => {
    const mockStore = configureStore();
    let initialState = {

    }
    let store;
    let wrapper;
    beforeEach(()=> {
        store = mockStore(initialState);
        wrapper = shallow(<RandomPerson person={Person} store={store} />)
    })

    it('render the connected(RandomPerson) component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('check if component is receiving prop data', () => {
        expect(wrapper.prop('person')).toEqual(Person)
    })
})