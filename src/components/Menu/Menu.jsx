import React, {
    useState,
    useRef,
} from 'react';

import PropTypes from 'prop-types';

import {
    useOutside
} from '../../hooks/hooks.jsx';

import MenuItem from '../MenuItem/MenuItem';

import './Menu.css';

function Menu({ onDelete }) {

    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef(null);
    useOutside(wrapperRef, setIsOpen);

    const onDeleteHandler = () => {
        setIsOpen(false);
        onDelete();
    };

    return (
        <div
            ref={wrapperRef}
            className='sub-menu' >

            <div
                onClick={() => setIsOpen(!isOpen)}
                className='sub-menu--dots-container'>
                <span className='sub-menu--dot' />
                <span className='sub-menu--dot' />
                <span className='sub-menu--dot' />
            </div>

            {
                isOpen &&
                <div className='sub-menu--buttons-container'>
                    <MenuItem
                        onClick={() => { }}
                        name='done'
                    />


                    <MenuItem
                        onClick={() => { }}
                        name='edit'
                    />


                    <MenuItem
                        onClick={onDeleteHandler}
                        name='delete'
                    />
                </div>
            }

        </div >
    );
}

Menu.propTypes = {
    onDelete: PropTypes.func.isRequired
};

export default Menu;