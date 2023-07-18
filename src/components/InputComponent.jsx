import { useState } from "react";

export const InputComponent = ({ onNewTask }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const input = inputValue.trim();

        if(input.length <= 1) return;
        setinputValue('');
        onNewTask(input);
    };

    return (
        <form action="" onSubmit={ onSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    );
};
