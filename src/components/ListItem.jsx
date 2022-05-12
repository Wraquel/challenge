import React from "react";
import { ListItemElement } from "../styles";
import TaskItem from "./TaskItem";

function ListItem(props){

return(
    
<ListItemElement>
        <h1>{props.name}</h1>
    <ul>
        {props.data.map(item => <TaskItem key={item.id} text={item.text} />)}
    </ul>
</ListItemElement>
);
}

export default ListItem;