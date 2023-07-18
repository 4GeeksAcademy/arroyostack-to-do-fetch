export const ActionsBar = ({ handleDelete, handleProgress, task }) => {
    return (
        <>
            <form onSubmit={ null }>


                <button onClick={ e => handleDelete(e, task.id) } type="button" className="btn  bg-light"><i className="bi bi-file-earmark-minus-fill"></i></button>

                <button onClick={ e => handleProgress(e, { id: task.id, body: task.body, progress: task.progress }) } type="button" className={ `btn  ${ task.progress === "false" ? "text-secondary bg-white" : "text-white bg-success" }` }><i className="bi bi-check-square"></i></button>
            </form>
        </>
    );
};
