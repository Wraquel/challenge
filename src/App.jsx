import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import TaskPage from "./pages/TaskPage";
import Sidebar from './components/Sidebar'
import { Header } from './styles'
import { AppElement } from './styles'

function App() {
  return (

    <AppElement>
    <div className="container">
         <Header>
             <h1> New App</h1> 
         </Header>
        <BrowserRouter>
        <Sidebar> 
        <Routes>
            <Route path="/*" element={<Homepage/>} />
            <Route path="/tasklist" element={<TaskPage/>} />     
    </Routes>
    </Sidebar> 
        </BrowserRouter>
        </div>
    </AppElement>
  );
}

export default App;
