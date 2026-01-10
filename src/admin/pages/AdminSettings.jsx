import AdminHeader from '../components/AdminHeader'
import AppFooter from '../../components/AppFooter'
import AdminSidebar from '../components/AdminSidebar'
import { Button, Card, TextInput } from 'flowbite-react'
import { useEffect, useState } from 'react'

function AdminSettings() {
  
 const[adminData , setAdminData] =useState([])


 useEffect(()=>{
  const storedUser = JSON.parse(sessionStorage.getItem("user"))
  setAdminData(storedUser)
 },[])
console.log(adminData);

  return (
    <>
      <AdminHeader />
      {/* settings page */}
      <div className='flex justify-start  '>
        {/* side bar */}
        <div>
          <AdminSidebar />
        </div>
        {/* contained */}
        <div style={{ width: '100%' }}>
          <h3 className='text-center font-bold italic text-3xl flex justify-center items-center text-white' style={{ width: '100% ', backgroundImage:`url('https://i.pinimg.com/1200x/8d/c2/f0/8dc2f090577b59234560a901e4f05c8c.jpg')`, height:'250px',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            // borderRadius:'50px'
            boxShadow:'4px 4px 8px black'
           }}>Settings</h3>

          <div className='mt-10 flex justify-between gap-4 mb-10 ' style={{ width: '100%' }}>
            {/* content */}
            <div className='flex flex-col justify-center' style={{ width: '40%' }}>
              <p className='leading-relaxed text-1xl italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos non hic velit amet. Officiis illo blanditiis a nemo voluptatem excepturi unde laborum voluptas veritatis? Eligendi adipisci reiciendis inventore dolorum.
                Nobis harum nulla voluptatum delectus esse maiores recusandae et dolorum a, omnis eaque corrupti voluptatem tempora dolores! Saepe aliquid officiis maxime aspernatur? Ratione laboriosam libero quos impedit aspernatur aliquid ab.</p>
              <br />
              <p className='leading-relaxed  text-1xl italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum suscipit alias, architecto veniam aliquid cum at mollitia ab, commodi minima animi dignissimos, ipsam possimus est quibusdam et placeat eos eveniet!
                Provident, quae! Accusamus quibusdam consectetur saepe maxime, ab nulla blanditiis aut, dolor iure incidunt ad quod iste. Nulla laboriosam commodi ipsam doloremque velit expedita aspernatur ad saepe, nisi officia quibusdam!</p>
            </div>
            {/* edit page */}
            <Card className='text-center p-5' style={{ width: '50%' }}>
              {/* admin image */}
              <div className='text-center'>
                <div className='flex justify-center flex-col'>
                  <img src={adminData.profile} alt="" className='w-40 h-40 rounded-full object-cover' />
                  <Button className='mt-[-25px] ml-[70px] w-4'>edit</Button>
                </div>
                {/* edit box */}
                <div className='mt-10' >
                  <TextInput className='mb-4' placeholder='name' value={adminData.username}></TextInput>
                  <TextInput className='mb-4' placeholder='pass1'></TextInput>
                  <TextInput className='mb-4' placeholder='pass2'></TextInput>
                </div >
              </div>
              <div className='flex justify-center gap-5 w-full'>
                <Button className='w-full bg-orange-500'>Reset</Button>
                <Button className='w-full bg-green-500'>Update</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  )
}

export default AdminSettings