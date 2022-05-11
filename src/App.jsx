
import React from 'react';
import Homepage from './pages/Homepage'
import TaskPage from "./pages/TaskPage";
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="container">
        <div className="Header">
        <h1> New App</h1> 
        </div>
        <div className="Sidebar">
        <h1> Sidebar</h1> 
          
        </div>
        <Homepage/>

        <TaskPage/>

        </div>
      </div>
     
  );
}

export default App;
