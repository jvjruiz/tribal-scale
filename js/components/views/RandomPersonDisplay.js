import React from 'react';

import RandomPersonList from '../common/RandomPersonList';
import RadioButton from '../common/RadioButton';
import SearchBar from '../common/SearchBar';
import Modal from '../common/Modal';

const Display = () => {
    return (
        <div>
            <div className='filter-options'>
                <SearchBar />
                <RadioButton />
            </div>
            <RandomPersonList />
            <Modal />
        </div>
    );
};

export default Display;