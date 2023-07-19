import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { SingleTask } from "./SingleTask";


export const TasksViewer = ({ tasks, handleDelete, handleProgress }) => {

    return (
        <>
            <div className="card p-4 " style={ { width: "25rem" } }>
                <SingleTask handleProgress={ handleProgress } tasks={ tasks } handleDelete={ handleDelete } />
            </div>
        </>
    );
};


TasksViewer.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleProgress: PropTypes.func.isRequired
};
