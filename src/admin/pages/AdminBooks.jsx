import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AppFooter from '../../components/AppFooter'
import { Card, TabItem, Tabs } from "flowbite-react";

function AdminBooks() {
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
              <TabItem title="Users "  >
                <div className='flex justify-start gap-2  flex-wrap  ' style={{ width: '900px' }}>
                  <Card className='w-70 h-35  '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card>
                  <Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card>
                  <Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card><Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card><Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card><Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card><Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card><Card className='w-70 h-35 p-4 '>
                    <p>id:87756476435475334</p>
                    <div className='flex justify-start gap-10'>
                      {/* user img */}
                      <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s" alt="" className='w-20 h-20 rounded-full object-cover' />
                      </div>
                      {/* userdetails */}
                      <div>
                        <h6>name</h6>
                        <h6>Email</h6>
                      </div>
                    </div>
                  </Card>
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