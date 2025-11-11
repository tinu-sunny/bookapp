import React from 'react'
import Header from '../components/Header'
import { Button, Card, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

function Careers() {
    const [openModal, setOpenModal] = useState(true);
  // const emailInputRef = useRef<HTMLInputElement>(null);
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
           <Button className='ml-5' onClick={() => setOpenModal(true)}>Apply</Button>
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
           <Button className='ml-5' onClick={() => setOpenModal(true)}>Apply</Button>
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

    {/* Modal code  */}

      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">Application Form</h3>
          <form className="p-6 space-y-6" >
                        {/* Input Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'> 
                            {['Name', 'Qualification', 'Email', 'Phone'].map(label => (
                                <div key={label}>
                                    <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                                    <input 
                                        type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'} 
                                        id={label.toLowerCase().replace(' ', '-')} 
                                        placeholder={label} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                        required 
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Cover Letter */}
                        <div>
                            <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                            <textarea id="cover-letter" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Type your cover letter here..."></textarea>
                        </div>
                        
                        {/* Resume Upload */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                            <input type="file" id="resume" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer" />
                        </div>

                        {/* Form Buttons */}
                        <div className="flex justify-end space-x-3 pt-2">
                            <button type="reset" className="bg-orange-400 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
                                Reset
                            </button>
                            <button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
                                Submit
                            </button>
                        </div>
                    </form>
           
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Careers