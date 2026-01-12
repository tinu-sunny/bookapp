import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

function AdminHeader() {

  const logout = ()=>{
   sessionStorage.clear();
   
  }
  return (
   <>
      <Navbar fluid rounded className="bg-[#d9875d] ">
      <NavbarBrand href="#" className="ml-20">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHndl4ELH7r0vrtGgKUOMSsjIvWXDcjKIdQQ&s" className="mr-3 h-6 sm:h-9" alt="F" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Finder</span>
      </NavbarBrand>
      <div className="flex md:order-2 mr-20">
       <Link to={'/'}> <Button onClick={logout}>LogOut</Button></Link>
        <NavbarToggle />
      </div>
   
    </Navbar>
   </>
  )
}

export default AdminHeader