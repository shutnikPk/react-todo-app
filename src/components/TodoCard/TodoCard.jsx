import React from 'react';

import './TodoCard.css';
import PropTypes from 'prop-types';

import {
    options
} from '../../constants/constants';

import PriorityIcon from '../PriorityIcon/PriorityIcon';
import Menu from '../Menu/Menu';

function TodoCard({
    todo,
    onDelete,
    setEditTaskId,
    canEdit
}) {

    const setFormateDate = () => {
        return new Date(todo?.deadline).toLocaleString([], {
            day: 'numeric', month: 'numeric', year: 'numeric'
        }).replaceAll('.', '/');
    };

    const compareDeadline = () => new Date(todo?.deadline) <= new Date() ?
        ' todo-card--deadline__danger'
        : '';

    return (
        <div className='todo-card' >
            <p className='todo-card--number'>{todo?.id + 1}</p>
            <p className='todo-card--text'>{todo?.text}</p>
            <p className={'todo-card--deadline' + compareDeadline()}>{setFormateDate()}</p >
            <div
                className={`priority-option-container priority-option-container${todo.priority}`}
                data-value={todo.priority}
            >
                <PriorityIcon
                    value={todo.priority}
                    label={options[todo.priority].label}
                    className={`option-value option-value${todo.priority}`}
                />
            </div>
            <Menu
                onDelete={() => onDelete(todo.id)}
                onEdit={() => canEdit && setEditTaskId(todo.id)}
            />
        </div>
    );
}

TodoCard.propTypes = {
    todo: PropTypes.shape({
        isImportant: PropTypes.bool,
        text: PropTypes.string,
        deadline: PropTypes.string,
        id: PropTypes.number,
        isFinished: PropTypes.bool,
        priority: PropTypes.number
    }).isRequired,
    canEdit: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    setEditTaskId: PropTypes.func.isRequired,
};

export default TodoCard;
