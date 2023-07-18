import { ActionsBar } from "./ActionsBar";



export const SingleTask = ({ tasks, handleDelete, handleProgress }) => {

    return (

        <>
            <ul className="list-group">
                { tasks.length > 0 && tasks.map(task => {
                    return (
                        <>
                            <div key={ task.id } className="row text-white border mb-2 actions-show-hide bg-light">
                                <li className="text-start col-6 list-group-item bg-light border-0 pt-3">{ task.body }</li>
                                <div className="col-6 text-end show-hide-component">
                                    <ActionsBar handleProgress={ handleProgress } handleDelete={ handleDelete } task={ task } />
                                </div>
                            </div>
                        </>

                    );
                }) }
                <li className="text-center border pt-3"><p>{ tasks.length } left</p></li>
            </ul>
        </>
    );
};
