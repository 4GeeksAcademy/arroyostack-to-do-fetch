export const deleteTask = async (identifier) => {
    const url = "http://localhost:8000/";
    const endpoint = "tasks";

    const requestOptions = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ identifier }`, requestOptions);

    } catch(error) {
        console.log(err, "This was catch by catch block in 'deleteTask'");

    }


};
