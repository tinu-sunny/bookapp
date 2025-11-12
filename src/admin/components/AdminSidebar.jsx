import React from 'react'
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
<>
  <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt=""  width={'100px'} height={'100px'}/>
        <h6 className='text-star'>Admin </h6>
        <SidebarItemGroup>
        
         <Link to={'/admin-home'}>
            <SidebarItem href="#">
              Home
            </SidebarItem>
         </Link>
         <Link to={'/admin-books'}>
            <SidebarItem  >
              All-Books
            </SidebarItem>
         </Link>
          <Link to={'/admin-careers'}>
            <SidebarItem href="#" >
            Careers
            </SidebarItem>
          </Link>
         <Link to={'/admin-settings'}>
            <SidebarItem href="#" >
              Settings
            </SidebarItem>
         </Link>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
</>
  )
}

export default AdminSidebar