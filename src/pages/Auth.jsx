import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { useState } from 'react';
import { loginUser, registerUSer } from '../Services/allAPIs';


function Auth({register}) {
  // console.log(register);

  const [userData,setUserData]=useState({
    'username':'','password':'','email':''
  })

  // register function 

  const handleRegister = async()=>{
    // console.log(userData);

    if(!userData.email||!userData.password||!userData.username){
      alert('Please fill the form')
    }
    
 else{
  try{

    const response = await registerUSer(userData)
    // console.log(response);

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
          // alert(response.data.message)
          alert(response.data.message)
        }
        else{
          // alert(response.response.data)
          alert(response.response.data)
        }
        

      }

      catch(err){
        console.log(err);
        
      }
    }
    
    
  }

  // console.log(userData);
  
  
  return (
<>
<section className='w-full ' style={{
  backgroundImage:`url('https://www.shutterstock.com/image-photo/old-geographical-globe-book-cabinet-600nw-2593402699.jpg')`,
  height:'100vh',
      backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundposition: 'center'}}>
  <div>
    <div>
      <form>
        <div className='flex flex-col justify-center items-start gap-5 p-20 '>
         {register? <h1 className='text-white font-bold text-4xl m-10 leading-tight mt-30'>Register Here</h1>:
          <h1 className='text-white font-bold text-4xl m-10 leading-tight mt-30'>Login Here</h1>}


         {register? <div className='w-80'>
            <label className='text-white text-[18px] font-medium leading-tight' >Full Name</label>
            <TextInput type='text' className='w-full' onChange={(e)=>setUserData({...userData,username:e.target.value})}></TextInput>
          </div>:""}

          <div className='w-80 ' >

            <label htmlFor="" className='text-white text-[18px] font-medium leading-tight' >Email</label>
            <TextInput type='email' className='w-full' onChange={(e)=>setUserData({...userData,email:e.target.value})}></TextInput>
          </div>
          <div className='w-80'>
            <label className='text-white text-[18px] font-medium leading-tight '>Password</label>
            <TextInput type='password' className='w-full'  onChange={(e)=>setUserData({...userData,password:e.target.value})}></TextInput>
          </div>
          <div className='mt-4'>
           { register?<Button onClick={handleRegister}>Register</Button> :<Button onClick={handleLogin}>Login</Button>}
          </div>
        </div>

      </form>
    </div>
  </div>
</section>

</> 

)}

export default Auth