
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import TaskPage from "./pages/TaskPage";
import Sidebar from './Sidebar'

function App() {
  return (

    <div className="App">
      <div className="container">
        <div className="Header">
        <h1> New App</h1> 
        </div>
        <BrowserRouter>
        <Sidebar> 
        <Routes>
            <Route path="/*" element={<Homepage/>} />
            <Route path="/tasklist" element={<TaskPage/>} />     
    </Routes>
        </Sidebar> 
        </BrowserRouter>
    

        </div>
      </div>
     
  );
}

export default App;
