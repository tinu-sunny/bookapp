import Header from '../components/Header'
import { Button, Card } from 'flowbite-react'
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { viewbook } from '../../Services/allAPIs';
function Viewbook() {
  const [openModal, setOpenModal] = useState(false);
const [token , setToken] = useState('')
const [bookData,setBookData]= useState({})
    console.log(bookData);

 useEffect(()=>{
       setToken(sessionStorage.getItem("token"))
     },[])
     console.log(token);

  const {id} = useParams()
  console.log(id);

 const viewActiveBook = async()=>{
const reqHeader = {
        Authorization:`Bearer ${token}`,
      };
      console.log(reqHeader);
        
  const response = await viewbook(id,reqHeader) 
  console.log(response);
  if(response.status == 200){
    const data = response.data.bookdata
    setBookData(data)
    
  }
  
 }

 useEffect(()=>{
  viewActiveBook();
 },[token])
  
  return (

    <>
      <Header />

      <Card className=' m-20  mt-25 items-center'>
        <div className='flex gap-10'>
          {/* image */}
          <div onClick={() => setOpenModal(true)}>
            <img src={bookData.imageUrl} alt="" width={'700px'} />
          </div>

          {/* conntent */}

          <div>
            {/* heading */}
            <div className='text-center mb-5'>
              <h3>{bookData.title}</h3>
              <a href="">{bookData.author}</a>
            </div>
            {/* details */}

            <div className='flex justify-between mb-5'>
              <p>Publisher :-{bookData.publisher}</p>
              <p>Language :-{bookData.language}</p>
              <p>No Of Pages :-{bookData.noofpages}</p>
            </div>

            {/* buy ditails */}

            <div className='flex justify-between mb-5'>
              <p>Seller Mail :- {bookData.userMail}</p>
              <p>Real price :- {bookData.price}</p>
              <p>ISBN :- {bookData.isbn}</p>
            </div>
            {/* Description */}
            <p>{bookData.abstract}</p>

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