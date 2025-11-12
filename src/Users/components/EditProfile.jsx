import { Button, Textarea, TextInput } from 'flowbite-react';
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>

      <Button color="alternative" onClick={() => setIsOpen(true)} >Edit</Button>
      {/* off canvac */}
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="Edit" />
        <DrawerItems>
          <div>
            <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-40 h-40 rounded-full object-cover shadow-md m-10" />
            <Button style={{ marginTop: '-70px', marginLeft: '90px' }}>edit</Button>
          </div>
          {/* details  */}
          <div className='mt-8'>
            <TextInput className='mb-4' placeholder='Name'></TextInput>
            <TextInput className='mb-4' placeholder='Password'></TextInput>
            <TextInput className='mb-4' placeholder='Password'></TextInput>
            <Textarea></Textarea>
          </div>
          {/* Form Buttons */}
          <div className="flex justify-end space-x-3 pt-2 mt-5">
            <button type="reset" className="bg-orange-400 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
              Reset
            </button>
            <button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
              Update
            </button>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default EditProfile