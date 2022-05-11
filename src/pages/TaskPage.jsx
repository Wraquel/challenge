import React, {useState, useEffect} from 'react';
import axios from 'axios';

function TaskPage() { 

  const [tasks, setTasks] = useState([]);
  useEffect(() => { 
    axios.get('http://localhost:3008/api/tasks/')
    .then(response => {
      setTasks(response.data)
    })
}, []);
return (
    <div className="TaskPage">
        this is taskpage
         <ul>
         {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
    </div>);
}


export default TaskPage;
