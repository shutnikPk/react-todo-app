import React from 'react';
import './AddButton.css'

function AddButton({ toggleActivity, activeClass }) {

    const toggleActivityInputHandler = (event) => {
        event.preventDefault()
        toggleActivity({ 'addbtn': false, 'form': true })
    }


    return (
        <button
            className=
            {'add-button ' +
                (activeClass ? '' : 'inactive')
            }
            onClick={toggleActivityInputHandler}>
            Add Todo
        </button>
    );
}

export default AddButton;
