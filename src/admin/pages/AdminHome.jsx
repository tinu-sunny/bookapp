import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AppFooter from '../../components/AppFooter'
import { Card } from 'flowbite-react'
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

function AdminHome() {
  return (
    <>
    <AdminHeader/>

    {/* home page  */}

    <div className='flex justify-start gap-20 mb-20 mt-10'>
      {/* side slider */}
      <div>
       <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt=""  width={'100px'} height={'100px'}/>
        <h6 className='text-star'>Admin </h6>
        <SidebarItemGroup>
        
          <SidebarItem href="#">
            Home
          </SidebarItem>
          <SidebarItem href="#" >
            All-Books
          </SidebarItem>
          <SidebarItem href="#" >
          Careers
          </SidebarItem>
          <SidebarItem href="#" >
            Settings
          </SidebarItem>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
      </div>
      {/* charts */}
      <div>
{/* cards */}
        <div className='flex w-full justify-evenly gap-6'>
<Card  className='text-center bg-green-500'>
  <p>icon</p>
  <p>Total Number Of Books <span>100+ </span></p>
</Card>
<Card className='text-center bg-blue-500' >
  <p>icon</p>
  <p>Total Number Of User <span>100+ </span></p>
</Card>
<Card className='text-start bg-orange-500'>
  <p>icon</p>
  <p>Total Number Of Employees <span>100+ </span></p>
</Card>
        </div>

        {/* charts */}

        <div className='flex justify-center gap-5 m-5 '>
          {/* chart -1 */}
          <div className='w-full'>
          <Card> 
            <p>snskh</p>
          </Card>
          </div>
          {/* chart-2 */}
           <div className='w-full'>
          <Card> 
            <p>snskh</p>
          </Card>
          </div>
        </div>

      </div>
    </div>





    <AppFooter/>  
    </>
  )
}

export default AdminHome