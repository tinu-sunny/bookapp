import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { useState } from 'react';
import { emailLoginUser, loginUser, registerUSer } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
  import { ToastContainer, toast,Bounce } from 'react-toastify';
  import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function Auth({register}) {
  // console.log(register);

  const [userData,setUserData]=useState({
    'username':'','password':'','email':''
  })
  
  const navigate = useNavigate()

  // register function 

  const handleRegister = async()=>{
    // console.log(userData);

    if(!userData.email||!userData.password||!userData.username){
      alert('Please fill the form')
    }
    
 else{
  try{

    const response = await registerUSer(userData)
    // console.log(response.data.activeUser.role);

    if(response.status==200){
    
      alert(response.data.message)
    }
    else{
     alert(response.response.data)
    }
    

  }
  catch(err){
    console.log(err);
    
  }
 }


  }

  const handleLogin=async()=>{
    // console.log("login");

    const {email,password}=userData
    // console.log(userData);
    if(!email || !password){
      alert("pleas filll the form")
    }

    else{
      try{
        const response = await loginUser(userData)
        console.log(response);
        if(response.status===200){
        sessionStorage.setItem("token",response.data.token)
 sessionStorage.setItem(
  "user",
  JSON.stringify(response.data.activeUser)
);
          // alert(response.data.message)
            if(response.data.activeUser.role=='admin'){

          // 
          setTimeout(() => {
   navigate("/admin-home");
}, 5000); 
      }
      else{
   setTimeout(() => {
  navigate("/");
}, 5000); 
      }
           toast.success(response.data.message, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        }
        else{
          // alert(response.response.data)
          // alert()

           toast.error(response.response.data, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        }
        

      }

      catch(err){
        console.log(err);
        
      }
    }
    
    
  }

  // console.log(userData);
  // decode email login data

  const handlegoogleLogin=async(credentialResponse)=>{
    const decode =  jwtDecode(credentialResponse.credential)
    console.log(decode);

    try{
              const response  = await emailLoginUser({username:decode.name,email:decode.email,password:'123',profile:decode.picture})
              console.log(response);

                 if(response.status===200){
        sessionStorage.setItem("token",response.data.token)
       sessionStorage.setItem(
  "user",
  JSON.stringify(response.data.existingUser)
);
        console.log(response.data.existingUser);
        

          // alert(response.data.message)
            if(response.data.existingUser.role=='Admin' ){

          // 
          setTimeout(() => {
   navigate("/admin-home");
}, 5000); 
      }
      else{
   setTimeout(() => {
  navigate("/");
}, 5000); 
      }
           toast.success(response.data.message, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        }
        else{
          // alert(response.response.data)
          // alert()

           toast.error(response.response.data, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
        }
              
    }
    catch(err){
      console.log(err);
      
    }
  }
  
  return (
<>
<section className='w-full ' style={{
  backgroundImage:`url('https://i.redd.it/ocdfd9h9gsxb1.jpg')`,
  height:'100vh',
      backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundposition: 'center'}}>
  <div>
    <div>
      <form>
        <div className='flex flex-col justify-center items-start gap-5 p-20 w-[50%] '>
         {register? <h1 className='text-white font-bold text-4xl m-10 leading-tight mt-30'>Register Here</h1>:
          <h1 className='text-white font-bold text-4xl m-10 leading-tight mt-30'>Login Here</h1>}


         {register? <div className='w-full'>
            <label className='text-white text-[18px] font-medium leading-tight' >Full Name</label>
            <TextInput type='text' className='w-full' onChange={(e)=>setUserData({...userData,username:e.target.value})}></TextInput>
          </div>:""}

          <div className='w-full ' >

            <label htmlFor="" className='text-white text-[18px] font-medium leading-tight' >Email</label>
            <TextInput type='email' className='w-full' onChange={(e)=>setUserData({...userData,email:e.target.value})}></TextInput>
          </div>
          <div className='w-full'>
            <label className='text-white text-[18px] font-medium leading-tight '>Password</label>
            <TextInput type='password' className='w-full'  onChange={(e)=>setUserData({...userData,password:e.target.value})}></TextInput>
          </div>
          <div className='mt-4 w-full'>
           { register?<Button onClick={handleRegister}>Register</Button> :<div className='w-full'><Button className='w-full mb-5' onClick={handleLogin}>Login</Button>
           <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    handlegoogleLogin(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;</div>}
         </div>
        </div>

      </form>
    </div>
  </div>
</section>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
</> 

)}

export default Auth