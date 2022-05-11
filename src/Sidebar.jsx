import React from "react";
import { NavLink } from "react-router-dom";


function Sidebar({children}) {
  
  const menuItem =[
    {
      path:"/*",
      name:"Home",
    },
    {
      path:"/tasklist",
      name:"Task List",
    }
  ]
    return (
        <div className="AppCore">

        <div className="Sidebar">
        {
        menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" >
            <div className="link-name">{item.name}</div>
          </NavLink>
        ))
      }
        </div>
      
    <main>
  {children}
</main> 
</div>
    );
}

export default Sidebar;