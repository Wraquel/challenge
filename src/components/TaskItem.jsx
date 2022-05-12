import React from "react";
import { TaskItemElement } from "../styles";

function TaskItem(props) {
  return (
    <TaskItemElement>
      <li>{props.text}</li>
    </TaskItemElement>
  );
}
export default TaskItem;
