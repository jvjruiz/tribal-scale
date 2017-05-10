import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as actions from '../js/redux/actions/index';

import { Person, People } from './seed-data';

describe('Tests for actions', ()=> {
    it('toggle modal', () => {
        const toggleModal = actions.toggleModal()
        expect(toggleModal).toEqual({type:'TOGGLE_MODAL'})
    })
    it('update modal person',()=> {
        const modalPerson = actions.modalPerson(Person)
        expect(modalPerson).toEqual({type:'MODAL_PERSON', payload:Person})
    })
});