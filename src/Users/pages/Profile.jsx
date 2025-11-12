
import Header from '../components/Header'
import { Button, Card, Textarea, TextInput } from 'flowbite-react';
import { TabItem, Tabs } from "flowbite-react";
import EditProfile from '../components/EditProfile';
function Profile() {

  return (
    <>
      <Header />


      <div className=' w-full h-50' style={{ backgroundColor: 'rgba(237, 126, 15, 0.67)' }}>
        {/* Top Background */}
      </div>

      {/* profile pic */}

      <div className='ml-10' style={{ marginTop: '-100px' }}>
        <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-50 h-50 rounded-full object-cover shadow-md mb-4" />
      </div>

      {/* details of users */}

      <div className=' ml-20 mr-20'>

        <div className='flex justify-between  p-5 '>
          <h4 className='mb-5 font-bold text-2xl '> User_Name</h4>
          <EditProfile />
        </div>
        <hr className='mb-5' />
        <p className=' leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia possimus voluptatem quisquam vitae iste non recusandae, voluptates laborum voluptate doloribus soluta est sapiente, ullam nesciunt fuga a officiis nihil? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae similique laboriosam deserunt accusamus quidem rerum voluptatibus provident maiores optio aut inventore, dolorem eius. Deserunt ex quos recusandae nam, accusamus placeat?</p>
      </div>

      {/* tabs */}

      <div className='items-center justify-center flex m-10 ' style={{ width: '100%' }}>
        <Tabs aria-label="Default tabs" variant="default">
          {/* Sell Book */}
          <TabItem active title="Sell Book"  >
            <div className='mt-9'>
              <Card className='mt-2 p-5' style={{ backgroundColor: '#65606017', width: '900px' }}>
                <h3 className='text-center p-8 font-bold'>Book Details</h3>
                <div className='flex items-center justify-center gap-6'>

                  <div className='w-100 ' style={{ marginTop: '-20px' }}>
                    <TextInput placeholder='Title' className='mb-2'></TextInput>
                    <TextInput placeholder='Author' className='mb-2'></TextInput>
                    <TextInput placeholder='No of Pages' className='mb-2'></TextInput>
                    <TextInput placeholder='Image Url' className='mb-2'></TextInput>
                    <TextInput placeholder='Price' className='mb-2'></TextInput>
                    <TextInput placeholder='Discount Prince' className='mb-2'></TextInput>
                    <Textarea placeholder='Abstract' className='mb-2'> </Textarea>
                  </div>

                  <div className='w-100'>
                    <TextInput placeholder='Pupblisher' className='mb-2'></TextInput>
                    <TextInput placeholder='Language' className='mb-2'></TextInput>
                    <TextInput placeholder='ISBN' className='mb-2'></TextInput>
                    <TextInput placeholder='Category' className='mb-2'></TextInput>
                    <div className='ml-25'>
                      <label htmlFor="image">
                        <input type="file" name='image' id='image' hidden />
                        <img src="https://cdn-icons-png.freepik.com/512/2893/2893432.png" alt="" width={'150px'} height={'50px'} />
                      </label>
                    </div>

                    <div className='flex gap-6 ml-50'>
                      <Button color='blue'>Save</Button>
                      <Button className='bg-[#FFA500]'>Reset</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
          {/* Book Status */}
          <TabItem title="Book Status" >
            <div className='mt-9'>
              <Card style={{ backgroundColor: '#65606017', width: '900px', marginBottom: '30px' }}>
                <div className='flex justify-between p-2'>
                  {/* data  */}
                  <div className='p-3'>
                    <h3>Book name</h3>
                    <p>Authr</p>
                    <p>price</p>
                    <p>status</p>
                  </div>
                  <div>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/BH/TW/OG/131304665/old-books.jpg" alt="" width='200px' height='250px' />
                    <Button color="red" className='ml-25 mt-3'>Delete</Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
          <TabItem title="Purchase History">
            <div className='mt-9'>
              <Card style={{ backgroundColor: '#65606017', width: '900px', marginBottom: '30px' }}>
                <div className='flex justify-between p-2'>
                  {/* data  */}
                  <div className='p-3'>
                    <h3>Book name</h3>
                    <p>Authr</p>
                    <p>price</p>
                    <p>Description</p>
                    <p>status</p>
                  </div>
                  <div>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/BH/TW/OG/131304665/old-books.jpg" alt="" width='200px' height='250px' />
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
        </Tabs>
      </div>

    </>

  )
}

export default Profile