import React from "react";
import ListItem from "../components/ListItem";
import { TaskPageElement, ErrorMessage } from "../styles";
import useTaskService from "../services/useTaskService";
import { FcHighPriority , FcOk} from "react-icons/fc";


function TaskPage() {

  const {tasks, error} = useTaskService();
  

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
    {tasks.todo ? <ListItem name={"To Do"} data={tasks.todo} status={<FcHighPriority size={25}/>}/> : null}
    {tasks.done ? <ListItem name={"Done"} data={tasks.done} status={<FcOk size={25}  />}/> : null}
  </TaskPageElement>
) : null;
}

export default TaskPage;
