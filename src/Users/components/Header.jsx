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
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverURL } from "../../Services/serverURL";
import { viewactiveuser } from "../../Services/allAPIs";


function Header() {

  const navigate = useNavigate()
  const [token,setToken]=useState('')
  const [activeUser,setActiveUser]=useState([])

  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[])
  // console.log(token);

  
 
const activeuserData = async()=>{

     const reqHeader = {
        Authorization:`Bearer ${token}`,
      };
      // console.log(reqHeader);

  const response = await viewactiveuser(reqHeader)
  // console.log(response);
  if (response.status==200){
    // console.log(response);
    
    setActiveUser(response.data.userdata)
  }
  
 }
 useEffect(()=>{
  activeuserData()
 },[token])
// console.log(activeUser);

const logout = ()=>{
  sessionStorage.clear();
      navigate('/');
      window.location.reload();
}
  

  
  
  return (
    <>
      <Navbar fluid rounded className="bg-[#d9875d]">
        <NavbarBrand href="#" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHndl4ELH7r0vrtGgKUOMSsjIvWXDcjKIdQQ&s" className="mr-3 h-6 sm:h-9" alt="F" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Book Finder</span>
        </NavbarBrand>
        <div className="flex md:order-2">
        
          {token?<Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt={activeUser.username} img={`${serverURL}/uploads/${activeUser.profile}`} rounded />
            }
          >
             <DropdownItem>{activeUser.username}</DropdownItem>
             <DropdownItem>{activeUser.email}</DropdownItem>
            <Link to={'/profile'}> <DropdownItem>profile</DropdownItem></Link>
            <DropdownDivider />
            <DropdownItem onClick={logout}>Sign out</DropdownItem>
          </Dropdown>:
        <div className="flex gap-5"><Link to={'/login'}>  <Button>Login</Button></Link> <Avatar alt="User settings" img='https://static.vecteezy.com/system/resources/previews/035/858/656/large_2x/3d-simple-user-icon-isolated-render-profile-photo-symbol-ui-avatar-sign-person-or-people-gui-element-realistic-illustration-vector.jpg' rounded /></div>}
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