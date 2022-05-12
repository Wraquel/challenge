import React, { useState, useEffect } from "react";
import TaskService from "../services/TaskService";
import ListItem from "../components/ListItem";
import { TaskPageElement, ErrorMessage } from "../styles";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  async function fetchTasks() {
    await TaskService()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((err) => setError(err));
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const toDo = tasks.filter((item) => item.completed === false);
  const Done = tasks.filter((item) => item.completed === true);

  if (error) {
    return (
      <>
        {" "}
        <ErrorMessage>
          {" "}
          Sorry there was an error in the API Call
        </ErrorMessage>{" "}
      </>
    );
  }

  return tasks ? (
    <TaskPageElement>
      <ListItem name={"To Do"} data={toDo} />
      <ListItem name={"Done"} data={Done} />
    </TaskPageElement>
  ) : null;
}

export default TaskPage;
