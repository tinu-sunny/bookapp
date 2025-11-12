import AdminHeader from '../components/AdminHeader'
import AppFooter from '../../components/AppFooter'
import { Card } from 'flowbite-react'
import AdminSidebar from '../components/AdminSidebar'

function AdminHome() {
  return (
    <>
    <AdminHeader/>
    {/* home page  */}
    <div className='flex justify-start gap-20 mb-20 mt-10'>
      {/* side slider */}
      <div>
     <AdminSidebar/>
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