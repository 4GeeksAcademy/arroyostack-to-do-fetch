import { useEffect, useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { InputComponent } from './components/InputComponent';
import { TasksViewer } from './components/TasksViewer';
import { Footer } from './components/Footer';
import { getTasks } from './helpers/getTasks';
import uuid from 'react-uuid';
import { addTask } from './helpers/addTask';


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

  // useEffect(() => {
  //   getTasks().then(data => setTasks(data));
  // }, [ onNewTask ]);

  return (
    <>


      {/* Header Component */ }
      <SiteHeader />

      {/* Input Component */ }
      <InputComponent onNewTask={ onNewTask } />

      {/* Todos List View Component */ }
      {/* <TasksViewer tasks={ tasks } /> */ }
      { tasks.length > 0 && tasks.map((task, i) => {
        return (
          <div key={ i }>
            <h1 >{ task.body }</h1>
          </div>
        );

      }) }
      {/* Footer */ }
      <Footer />
    </>
  );
};

export default App;
