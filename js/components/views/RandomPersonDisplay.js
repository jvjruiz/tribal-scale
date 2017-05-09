import React from 'react';

import RandomPersonList from '../common/RandomPersonList';
import RadioButton from '../common/RadioButton';
import SearchBar from '../common/SearchBar';

const Display = () => {
    return (
        <div>
            <SearchBar />
            <RadioButton />
            <RandomPersonList />
        </div>
    );
};

export default Display;