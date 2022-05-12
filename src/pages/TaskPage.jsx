import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { TaskPageElement } from '../styles'

function TaskPage() { 

  const [tasks, setTasks] = useState([]);
  useEffect(() => { 
    axios.get('http://localhost:3008/api/tasks/')
    .then(response => {
      setTasks(response.data)
    })
}, []);
return (
  <TaskPageElement>
         <ul>
         {tasks.map((task) => (
        <li key={task.id}>{task.text} {task.completed ? "Done": "To Do"}</li>
      ))}
    </ul>
    </TaskPageElement>);
}


export default TaskPage;
