export const deleteTask = async (identifier) => {
    const url = "http://localhost:8000/";
    const endpoint = "tasks/";

    const requestOptions = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(`${ url }${ endpoint }${ identifier }`, requestOptions);
        const data = response.json();

        return data;

    } catch(error) {
        console.log(error, "This was catch by catch block in 'deleteTask'");

    }


};
