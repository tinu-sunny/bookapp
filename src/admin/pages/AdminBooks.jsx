import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AppFooter from '../../components/AppFooter'
import { Card, TabItem, Tabs } from "flowbite-react";
import { useEffect, useState } from 'react';
import { adminuserviewAPI } from '../../Services/allAPIs';


function AdminBooks() {
   const [token , setToken] = useState('')
   const [userData,setUserData] = useState({})
   const [errorMessage,setErrorMessage]=useState('')
      console.log(userData);

    useEffect(()=>{
           setToken(sessionStorage.getItem("token"))
         },[])
         console.log(token);

  const adminuserview = async()=>{
const reqHeader = {
        Authorization:`Bearer ${token}`,
      };
      console.log(reqHeader);

    const response = await adminuserviewAPI(reqHeader)
    console.log(response);
    if(response.status==200){
      const data =response.data.userdata
      console.log(data);
      
      setUserData(data)
      
    }
    else{

      setErrorMessage(response.response.data.message)
    }

  }

  useEffect(()=>{
    adminuserview()
  },[token])

  return (
    <>

      <AdminHeader />

      <div className='flex justify-start  w-full'>
        <div>
          {/* side bar */}
          <AdminSidebar />
        </div>

        {/* Books */}

        <div className='flex flex-col justify-center align-center w-full' >
          <h3 className='text-center font-bold italic text-3xl flex justify-center  items-center text-white ' style={{ width: '100% ', backgroundImage:`url('https://i.pinimg.com/1200x/37/85/30/378530a945927b8d2054808fa0b85386.jpg')`, height:'250px',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            // borderRadius:'50px'
            boxShadow:'4px 4px 8px black'
           }}>All books</h3>

          <div className=' p-5  ' style={{ width: '100%' }}>
            <Tabs aria-label="Default tabs" variant="default">
              <TabItem active title="Book List" >
                <div className='flex justify-center  gap-3 flex-wrap'>
                  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>
                  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>  <Card className='w-60'>
                    <img src="https://media.gettyimages.com/id/eds005/vector/school-books.jpg?s=1024x1024&w=gi&k=20&c=TqO7AvU7jFwPHIGgJWJmYjbPUcoYmZADpYJrALJ2DxA=" alt="" width={'200px'} height={'200px'} />
                    <p>Book name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </Card>

                </div>
              </TabItem>
             <TabItem title="Users">
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
    {userData && userData.length > 0 ? (
      userData.map(item => (
        <Card key={item._id} className="w-full p-4">
          
          <p className="text-sm text-gray-500 mb-3">
            ID: {item._id}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            
            <img
              src={item.profile}
              alt={item.username}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />

            <div className="text-center sm:text-left">
              <h6 className="font-semibold text-base">
                {item.username}
              </h6>
              <p className="text-sm text-gray-600 break-all">
                {item.email}
              </p>
            </div>

          </div>
        </Card>
      ))
    ) : (
      <h1 className="col-span-full text-center text-[#111418] font-bold leading-tight text-4xl bg-orange-300 rounded-xl p-5 shadow-2xl shadow-amber-100">
       {errorMessage}
      </h1>
    )}

  </div>
</TabItem>


            </Tabs>
          </div>
        </div>
      </div>

      <AppFooter />

    </>
  )
}

export default AdminBooks