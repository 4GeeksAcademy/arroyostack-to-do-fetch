import { useEffect, useState } from 'react';
// Random id generator.
import uuid from 'react-uuid';

// COMPONENTS
import { SiteHeader, InputComponent, TasksViewer, AudioComponent, AuthorComponent } from './components';

// HELPER FUNCTIONS
import { getTasks, addTask, deleteTask, updateProgress, allTaskTrue } from './helpers';

// Songs
import theBass from './assets/audio/all-about-bass.mp4';

const songImage = 'https://i.pinimg.com/originals/a7/c3/d2/a7c3d2d5f3d82151594ae72f89cf467c.gif';

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

  return (
    <>
      {/* Author Component */ }
      <div className='pt-5'>
        <AuthorComponent
          authorName="arroyostack"
          url="https://github.com/arroyostack" />
      </div>


      {/* Header Component */ }
      <div className='pt-5'>
        < SiteHeader
          heading="What needs to be done"
          subHeading="Complete all your task and get a special gift."
        />
      </div>

      {/* Input Component */ }
      <InputComponent
        onNewTask={ onNewTask }
        className="w-100"
        placeholder="I need to..." />

      {/* Audio Component */ }
      { everyTasks && tasks.length > 0 ?
        <AudioComponent
          song={ theBass }
          songImage={ songImage } /> : null }

      {/* Tasks List View Component */ }
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <TasksViewer
          handleProgress={ handleProgress }
          tasks={ tasks }
          handleDelete={ handleDelete } />
      </div>


    </>
  );
};

export default App;
