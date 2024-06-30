import  { React } from 'react';
import  './App.css';
import Routing from './Components/Routing/Routing';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
    <div>
      <nav><Navbar /></nav>
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;