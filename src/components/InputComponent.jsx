import PropTypes from 'prop-types';
import { useState } from "react";

export const InputComponent = ({ onNewTask, placeholder }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const input = inputValue.trim();

        if(input.length <= 1) return;

        setInputValue('');

        onNewTask(input);
    };

    return (
        <form action="" onSubmit={ onSubmit }>
            <div className="input-group mb-3 container">

                <input type="text"
                    className="form-control text-center"
                    placeholder={ placeholder }
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </div>
        </form>

    );
};

InputComponent.propTypes = {
    onNewTask: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

InputComponent.defaultProps = {
    placeholder: 'Add a new task'
};
