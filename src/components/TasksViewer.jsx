import { useEffect, useState } from "react";

export const TasksViewer = ({ tasks }) => {

    return (
        <>

            { tasks.length > 0 && todos.map((task, i) => {
                return (
                    <div key={ i }>
                        <h1 >{ task.body }</h1>
                    </div>
                );

            }) }

        </>
    );
};
