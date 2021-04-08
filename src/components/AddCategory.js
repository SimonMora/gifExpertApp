import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ handleAdd }) => {

    const [inputValue, setInputValue] = useState('Insert your category...');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(inputValue);
        setInputValue('Insert your category...');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );


};

AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};
