import { useEffect, useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { InputComponent } from './components/InputComponent';
import { TasksViewer } from './components/TasksViewer';
import { Footer } from './components/Footer';
import { getTasks } from './helpers/getTasks';
import { v4 as uuid } from 'uuid';
import { addTask } from './helpers/addTask';


const App = () => {

  return (
    <>
      {/* Header Component */ }
      <SiteHeader />

      {/* Input Component */ }
      <InputComponent />

      {/* Todos List View Component */ }
      <TasksViewer />

      {/* Footer */ }
      <Footer />
    </>
  );
};

export default App;
