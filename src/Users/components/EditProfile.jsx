import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useEffect, useState } from "react";
import { userprofileedit, viewactiveuser } from '../../Services/allAPIs';

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);
    const [activeUser,setActiveUser]=useState({})
    const [token,setToken]=useState('')
    const [preview,setPreview]=useState('')
    const [oldpass,setOldpass]= useState('')
 const[newpass,setNewpass]=useState(false)

    console.log(activeUser);
    
console.log(token);

  const handleClose = () => setIsOpen(false);

   useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token) {
        setToken(token)
      }
    }, []);


     const activeuserData = async()=>{

     const reqHeader = {
        Authorization:`Bearer ${token}`,
      };
      // console.log(reqHeader);

  const response = await viewactiveuser(reqHeader)
  // console.log(response);
  if (response.status==200){
    setActiveUser(response.data.userdata)
  }
  
 }
 useEffect(()=>{
  activeuserData()
 },[token])

// image uplodad

const handleimageupload = (e)=>{

  let image = activeUser.profile
  image = e.target.files[0]

  setActiveUser({...activeUser,profile:image})

  const url = URL.createObjectURL(e.target.files[0])

  setPreview(url)
}


// handlepasswordcheck 
const handlepasswordcheck =()=>{
  if(oldpass=== activeUser.password){
  setNewpass(true)  }
  else{
    alert('password missmatch')
  }
}

const handleUpdate = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);

    const reqbody = new FormData();
    for (let key in activeUser) {
      reqbody.append(key, activeUser[key]);
    }
    const response = await userprofileedit(reqbody, reqHeader);
    console.log(response);
    if (response.status == 200) {
      alert("updated");
    }
  };

  const reset = () => {
    admindata();
  };

  return (
    <>

      <Button color="blue" onClick={() => setIsOpen(true)} >Edit</Button>
      {/* off canvac */}
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="Edit" />
        <DrawerItems>
          <div>
          <Label htmlFor='image'>
            <TextInput type='file' id='image' hidden onChange={(e)=>{handleimageupload(e)}}></TextInput>
              <img src={preview ? preview :activeUser.profile} alt={activeUser.username} id='image' className="w-40 h-40 rounded-full object-cover shadow-md m-10" />
              <div id='image'><p style={{ marginTop: '-70px', marginLeft: '90px' }}>edit</p></div>
          </Label>
          </div>
          {/* details  */}
          <div className='mt-8'>
            <TextInput className='mb-4' placeholder='Name' value={activeUser.username} onChange={(e)=>{setActiveUser({...activeUser,username:e.target.value})}}></TextInput>
              <Textarea className='mb-4' value={activeUser.bio} onChange={(e)=>{setActiveUser({...activeUser,bio:e.target.value})}}></Textarea>
         {!newpass?  <div>
              <TextInput className='mb-4' placeholder='Current password' onChange={(e)=>{setOldpass(e.target.value)}}></TextInput>
                <div className='flex justify-center'><Button onClick={handlepasswordcheck}> verify</Button></div>
              
           </div>:<TextInput className='mb-4' placeholder='New Password' onChange={(e) =>
           setActiveUser({
  ...activeUser,
  password: e.target.value
})
                  } ></TextInput>}
          
          </div>
          {/* Form Buttons */}
          <div className="flex justify-end space-x-3 pt-2 mt-5">
            <button type="reset" className="bg-orange-400 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
              Reset
            </button>
            <button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default EditProfile