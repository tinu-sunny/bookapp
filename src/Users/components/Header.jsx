import {
  Avatar,
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

function Header() {
  return (
    <>
      <Navbar fluid rounded className="bg-[#d9875d]">
        <NavbarBrand href="#" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHndl4ELH7r0vrtGgKUOMSsjIvWXDcjKIdQQ&s" className="mr-3 h-6 sm:h-9" alt="F" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Book Finder</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Link to={'/profile'}> <DropdownItem>Dashboard</DropdownItem></Link>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse >
       <Link to={'/'}>
            <NavbarLink href="#" className="text-white">
              Home
            </NavbarLink>
       </Link>
          <Link to={'/all-Books'}>  <NavbarLink href="#" className="text-white">Books</NavbarLink></Link>
          <Link to={'/careers'}> <NavbarLink href="#" className="text-white">Careers</NavbarLink> </Link>
          <Link to={'/contact'}> <NavbarLink href="#" className="text-white">Contact</NavbarLink></Link>
        </NavbarCollapse>
      </Navbar>
    </>
  )
}

export default Header