import React, {useState, useEffect} from 'react';
import TaskService from '../services/TaskService';
import ListItem from '../components/ListItem';
import { TaskPageElement } from '../styles'

function TaskPage() { 
  const [tasks, setTasks] = useState([]);

  async function fetchTasks(){
  await  TaskService().then(tasks => setTasks(tasks))
  }
  
  useEffect(() => { 
    fetchTasks()
}, []);

const toDo = tasks.filter(item =>item.completed===false)
const Done = tasks.filter(item =>item.completed===true)


return (

    <TaskPageElement>
    <ListItem name={'To Do'} data={toDo}/>
    <ListItem name= {'Done'} data={Done}/>
    </TaskPageElement>);
}

export default TaskPage;
