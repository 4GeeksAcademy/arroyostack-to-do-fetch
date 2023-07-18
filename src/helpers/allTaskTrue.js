export const allTaskTrue = (everyTasks, someTasks, tasks) => {
    if(everyTasks === true && tasks.length > 0) {
        document.body.style.background = "url('https://i.pinimg.com/originals/a7/c3/d2/a7c3d2d5f3d82151594ae72f89cf467c.gif')";
    } else if(someTasks === true && tasks.length > 0) {
        document.body.style.background = "url('https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
    } else if(tasks.length === 0) {
        document.body.style.background = "url('https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
    }
};
