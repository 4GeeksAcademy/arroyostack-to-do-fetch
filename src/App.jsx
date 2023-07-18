import { useEffect, useState } from 'react';
// Random id generator.
import uuid from 'react-uuid';

// COMPONENTS
import { SiteHeader } from './components/SiteHeader';
import { InputComponent } from './components/InputComponent';
import { TasksViewer } from './components/TasksViewer';
import { AudioComponent } from './components/audioComponent';
import { AuthorComponent } from './components/AuthorComponent';



// HELPER FUNCTIONS
import { getTasks } from './helpers/getTasks';
import { addTask } from './helpers/addTask';
import { deleteTask } from './helpers/deleteTask';
import { updateProgress } from './helpers/updateProgress';
import { allTaskTrue } from './helpers/allTaskTrue';





const placeholder = "I need to do...";
const App = () => {
  const [ tasks, setTasks ] = useState([]);

  // Check progress of all tasks
  const everyTasks = tasks.every(task => task.progress === "true");
  const someTasks = tasks.some(task => task.progress === "false");


  useEffect(() => {
    getTasks().then(data => setTasks(data));

  }, []);

  useEffect(() => {
    allTaskTrue(everyTasks, someTasks, tasks);
  }, [ tasks ]);

  const onNewTask = async (task) => {
    await addTask(task, uuid());

    const response = await getTasks();

    setTasks(response);

  };

  const handleDelete = async (e, identifier) => {
    await deleteTask(identifier);

    const response = await getTasks();

    setTasks(response);

  };

  const handleProgress = async (e, identifier) => {

    await updateProgress(e, identifier);

    const response = await getTasks();

    setTasks(response);

  };

  // useEffect(() => {
  //   getTasks().then(data => setTasks(data));
  // }, [ onNewTask ]);

  return (
    <>
      <div className='pt-5'>
        <AuthorComponent />
      </div>
      {/* Header Component */ }
      <div className='pt-5'>
        < SiteHeader />

      </div>
      {/* End of Header Component */ }

      {/* Input Component */ }
      <InputComponent onNewTask={ onNewTask } className="w-100" placeholder={ placeholder } />
      {/* End of Input Component */ }

      {/* Audio Component */ }
      { everyTasks && tasks.length > 0 ? <AudioComponent /> : null }
      {/* End of Audio Component */ }

      {/* Todos List View Component */ }
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <TasksViewer handleProgress={ handleProgress } tasks={ tasks } handleDelete={ handleDelete } />
      </div>
      {/* Enf of Todos List View Component */ }

    </>
  );
};

export default App;
