import { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { InputComponent } from './components/InputComponent';
import { TasksViewer } from './components/TasksViewer';
import { Footer } from './components/Footer';

function App () {
  const [ count, setCount ] = useState(0);

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
}

export default App;
