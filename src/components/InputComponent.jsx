import { useState } from "react";

export const InputComponent = ({ onNewTask, placeholder }) => {

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
