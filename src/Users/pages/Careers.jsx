import React from 'react'
import Header from '../components/Header'
import { Button, Card, TextInput } from 'flowbite-react'

function Careers() {
  return (
    <>
    <Header/>

    {/* heading */}
    <div className='text-center mt-10'>
       <h2 className='sm:text-2xl md:text-4xl font-bold italic'>Careers</h2>
       <p className='font-light italic px-4 sm:px-8 md:px-40  text-justify leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos pariatur facere aliquam at, similique accusantium architecto fugiat. Tempore doloremque cumque ipsa sapiente nobis incidunt cum esse neque, dignissimos dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quisquam vel amet sint voluptatem, recusandae dolores sunt consectetur a. Fuga assumenda architecto incidunt deleniti magnam placeat quisquam totam recusandae autem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet inventore similique deleniti magnam exercitationem eligendi, aspernatur aut eveniet laborum, ut ducimus esse dignissimos fugiat voluptate laboriosam dicta, voluptatem temporibus ad?</p>
    </div>

    {/* Sub heading */}

    <div className='p-8'>
      <h4 className='text-2xl font-bold'>Current Openings</h4>
    </div>

    {/* SearchBar */}

    <div className='flex justify-center items-center'>
      <TextInput className='w-64 sm:w-80 md:w-[500px] bg-white text-black' placeholder='Job Title'>

      </TextInput>
      <Button className='px-4 py-4 ml-2'>search</Button>
    </div>

    {/* Openings */}

    <div className='m-10 p-8 '>
      <Card className='mb-8'>
        {/* jobtitle and apply button */}
       <div className='flex'>
        <p className='md:w-4/4'>
            <h5>Job Title</h5>
            <hr />
        </p>
           <Button className='ml-5'>Apply</Button>
       </div>
       {/* description */}

       <div>
        <p>location :</p>
        <p>Job Type :</p>
        <p>Salary :</p>
        <p>Qualification :</p>
        <p>Experience :</p>
        <p>Description :</p>
       </div>
      </Card>

       <Card className=''>
        {/* jobtitle and apply button */}
       <div className='flex'>
        <p className='md:w-4/4'>
            <h5>Job Title</h5>
            <hr />
        </p>
           <Button className='ml-5'>Apply</Button>
       </div>
       {/* description */}

       <div>
        <p>location :</p>
        <p>Job Type :</p>
        <p>Salary :</p>
        <p>Qualification :</p>
        <p>Experience :</p>
        <p>Description :</p>
       </div>
      </Card>
    </div>

    </>
  )
}

export default Careers