import React, {
    useRef
} from 'react';

import {
    useState
} from 'react';

import PropTypes from 'prop-types';

import PriorityIcon from '../PriorityIcon/PriorityIcon';

import './PriorityOption.css';

import {
    options
} from '../../constants/constants';

import {
    useOutside
} from '../../hooks/hooks.jsx';

function PriorityOption({ setTodoPriority,
    initialPriority,
    onMouseEnter,
    onMouseLeave,
}) {

    const [selectedOption, setSelectedOption] = useState(initialPriority | 0);
    const [isOpenList, setIsOpenList] = useState(false);



    const wrapperRef = useRef(null);
    useOutside(wrapperRef, setIsOpenList);

    const handleClick = (value) => {
        setTodoPriority(value);
        setSelectedOption(value);
        setIsOpenList(!isOpenList);
    };

    return (
        <div

            tooltip={'Select priority'}
            ref={wrapperRef}
            className='priority'
        >
            <div className={`selected-option ${isOpenList ? 'hidden-list' : ''}`}>
                <div
                    key={selectedOption}
                    className={'priority-option-container priority-option-container__input'}
                    onClick={() => handleClick(selectedOption)}
                    data-value={selectedOption}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    tooltip={options[selectedOption].label}
                >
                    <PriorityIcon
                        value={selectedOption}
                        label={options[selectedOption].label}
                        className={`option-value option-value${selectedOption}`}
                    />
                </div>
            </div>
            <div className={`priority-option-list ${isOpenList ? '' : 'hidden-list'}`}>
                {
                    options.map(({ value, label = '' }) => (
                        <div
                            key={value}
                            className={
                                `priority-option-container
                                priority-option-container__input
                                priority-option-container__input${value}`
                            }
                            onClick={() => handleClick(value)}
                            data-value={value}
                            tooltip={label}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                        >
                            <PriorityIcon
                                value={value}
                                label={label}
                                className={`option-value option-value${value}`}
                            />

                        </div>
                    ))
                }
            </div>
        </div >
    );
}

PriorityOption.propTypes = {
    setTodoPriority: PropTypes.func.isRequired,
};

export default PriorityOption;
