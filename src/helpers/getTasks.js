export const getTasks = async () => {
    const url = "http://localhost:8000/";
    const endpoint = "tasks";

    try {
        const response = await fetch(url + endpoint);
        const data = await response.json();
        // return data;

        return data;

    } catch(error) {
        console.log(error, "This was catch by catch block");
    }
};
