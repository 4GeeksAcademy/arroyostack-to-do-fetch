import { ActionsBar } from "./ActionsBar";



export const SingleTask = ({ tasks, handleDelete, handleProgress }) => {

    return (

        <>
            <ul className="list-group">
                { tasks.length > 0 && tasks.map(task => {
                    return (
                        <div key={ task.id } className="text-white">
                            <li className="list-group-item">{ task.body }</li>
                            <ActionsBar handleProgress={ handleProgress } handleDelete={ handleDelete } task={ task } />
                        </div>

                    );
                }) }
            </ul>
        </>
    );
};
