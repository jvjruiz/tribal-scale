import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Modal from '../js/components/common/Modal';
import { Person } from './seed-data';

describe('MODAL connected component', () => {
    const initialState = {
        modalOpen: true,
        modalPerson: Person,   
    }
    const mockStore = configureStore();
    let store;
    let wrapper;
    beforeEach(()=> {
        store = mockStore(initialState);
        wrapper = shallow(<Modal store={store} />)
    })

    it('render the connected(MODAL) component', () => {
       expect(wrapper.length).toEqual(1);
    })

    it('check prop matches with intialState', () => {
        expect(wrapper.prop('modalOpen')).toEqual(true)
        expect(wrapper.prop('modalPerson')).toEqual(Person)
    })
})