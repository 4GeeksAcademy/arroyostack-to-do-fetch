export const updateProgress = async (e, taskObject) => {
    const url = "http://localhost:8000/";
    const endpoint = "tasks/";
    const { id, body, progress } = taskObject;

    const requestOptions = {
        "method": 'PUT',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({
            "body": body,
            "id": id,
            "progress": progress === "false" ? "true" : "false"
        })
    };




    const response = await fetch(`${ url }${ endpoint }${ id }`, requestOptions);
    const data = await response.json();

    console.log(data);
};
