import Header from '../components/Header'
import { Button, Card } from 'flowbite-react'
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
function Viewbook() {
  const [openModal, setOpenModal] = useState(false);
  return (

    <>
      <Header />

      <Card className=' m-20  mt-25 items-center'>
        <div className='flex gap-10'>
          {/* image */}
          <div onClick={() => setOpenModal(true)}>
            <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'700px'} />
          </div>

          {/* conntent */}

          <div>
            {/* heading */}
            <div className='text-center mb-5'>
              <h3>Book Name</h3>
              <a href="">-Author Name</a>
            </div>
            {/* details */}

            <div className='flex justify-between mb-5'>
              <p>Publisher</p>
              <p>Language</p>
              <p>No Of Pages</p>
            </div>

            {/* buy ditails */}

            <div className='flex justify-between mb-5'>
              <p>Seller Mail</p>
              <p>Real price</p>
              <p>ISBN</p>
            </div>
            {/* Description */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus dignissimos architecto deserunt dolor nobis veniam eius odio distinctio consequuntur. Quae repudiandae est alias ratione fuga animi maxime reprehenderit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem illo dignissimos ipsa at nulla facilis. Consequuntur animi, porro tenetur quae nostrum beatae, nam obcaecati eum et praesentium cupiditate alias.</p>

            {/* Button */}

            <div className='flex justify-end space-x-3 pt-2 mt-5'>
              <Link to={'/all-books'}> <Button className='bg-orange-400 hover:bg-red-500 font-medium py-2 px-4 rounded-lg shadow-md transition duration-200'>Back</Button></Link>
              <Button className='bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200'>Buy</Button>
            </div>
          </div>
        </div>

      </Card>

      {/* image modal */}

      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <ModalHeader>Book Photos</ModalHeader>
        <ModalBody>
          <h6>Camera Click of the book in the hand of seller</h6>

          {/* image */}

          <div className='mt-8 flex justify-center gap-6 flex-wrap'>
            <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'200px'} />
            <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'200px'} />
            <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'200px'} />
            <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'200px'} />  <img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?cs=srgb&dl=pexels-dayanrodio-4132936.jpg&fm=jpg" alt="" width={'200px'} />
          </div>

        </ModalBody>
      </Modal>

    </>
  )
}

export default Viewbook