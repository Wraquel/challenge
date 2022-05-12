import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarElement } from '../styles'
import { AppCoreElement } from '../styles'


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
      <AppCoreElement>
      <SidebarElement>
        {
        menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" >
            <div className="link-name">{item.name}</div>
          </NavLink>
        ))
      }
          </SidebarElement>
      
    <main>
  {children}
</main> 
</AppCoreElement>
    );
}

export default Sidebar;