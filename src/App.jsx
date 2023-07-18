import { useEffect, useState } from 'react';
// Random id generator.
import uuid from 'react-uuid';

// COMPONENTS
import { SiteHeader } from './components/SiteHeader';
import { InputComponent } from './components/InputComponent';
import { TasksViewer } from './components/TasksViewer';
import { Footer } from './components/Footer';

// HELPER FUNCTIONS
import { getTasks } from './helpers/getTasks';
import { addTask } from './helpers/addTask';
import { deleteTask } from './helpers/deleteTask';
import { updateProgress } from './helpers/updateProgress';

const placeholder = "I need to do...";
const App = () => {
  const [ tasks, setTasks ] = useState([]);


  useEffect(() => {
    getTasks().then(data => setTasks(data));

  }, []);

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
      <InputComponent onNewTask={ onNewTask } className="w-100" placeholder={ placeholder } />
      <header className="">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">

              <TasksViewer handleProgress={ handleProgress } tasks={ tasks } handleDelete={ handleDelete } />
            </div>
          </div>
        </div>
      </header >
      {/* Header Component */ }
      < SiteHeader />

      {/* Input Component */ };


      {/* Todos List View Component */ }


      {/* Footer */ }
      <Footer />
    </>
  );
};

export default App;
