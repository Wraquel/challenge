import React from "react";
import { SidebarElement, AppCoreElement, SidebarLink  } from "../styles";


function Sidebar({ children }) {
  const menuItem = [
    {
      path: "/*",
      name: "Home",
    },
    {
      path: "/tasklist",
      name: "Task List",
    },
  ];
  return (
    <AppCoreElement>
      <SidebarElement>
        {menuItem.map((item, index) => (
          <SidebarLink to={item.path} key={index} className="link">
            {item.name}
          </SidebarLink>
        ))}
      </SidebarElement>

      <main>{children}</main>
    </AppCoreElement>
  );
}

export default Sidebar;
