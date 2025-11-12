import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AppFooter from '../../components/AppFooter'
import { Card, TabItem, Tabs } from "flowbite-react";

function AdminBooks() {
  return (
    <>

      <AdminHeader />

      <div className='flex justify-start gap-20 w-full'>
        <div>
          {/* side bar */}
          <AdminSidebar />
        </div>

        {/* Books */}

        <div className='flex flex-col justify-center align-center'>
          <h3 className='text-center font-bold italic text-3xl ' style={{ width: '100%  ' }}>All books</h3>

          <div className='mt-10 p-8  ' style={{ width: '900px' }}>
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
              <TabItem title="Users" >
                <div className='flex justify-start gap-2  flex-wrap ' style={{ width: '900px' }}>
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