import React from 'react'
import Header from '../components/Header'
import { Button, Card, TextInput } from 'flowbite-react'
import { FaSearch } from "react-icons/fa";
import { Label, Radio } from "flowbite-react";
import AppFooter from '../../components/AppFooter';

function AllBooks() {
  return (
    <>
    <Header/>

  
      {/* Heading */}
  
         <div>
          <h2 className='text-center text-4xl font-bold italic m-10'>Collections</h2>
          <div className='flex  justify-center ' style={{width:"100%"}}>
            <TextInput  style={{backgroundColor:'white', width:'500px', color:'black'}}/>
              <Button className='ml-1'>
                <FaSearch className="m-2 h-4 w-4 " />
        </Button>
          </div>
          </div>    
  
          {/* Side bar */}
  <div className='m-10'>
         <div className="flex max-w-md flex-col gap-4 bg- p-6 rounded-lg text-black" style={{backgroundAttachment:'fixed'}}>
          <h3>Filters</h3>

             <div className="flex items-center gap-2">
      <Radio id="No-filter" name="countries" value="No-filter" defaultChecked />
      <Label htmlFor="No-filter">No-filter</Label>
    </div>
    <div className="flex items-center gap-2 text-black">
      <Radio id=" Literary Fiction" name="countries" value=" Literary Fiction" />
      <Label htmlFor=" Literary Fiction"> Literary Fiction</Label>
    </div>
    <div className="flex items-center gap-2">
      <Radio id="Philosophy" name="countries" value="Philosophy" />
      <Label htmlFor="Philosophy">Philosophy</Label>
    </div>
     <div className="flex items-center gap-2">
      <Radio id="Thriller" name="countries" value="Thriller" />
      <Label htmlFor="Thriller">Thriller</Label>
    </div>
     <div className="flex items-center gap-2">
      <Radio id="Romance" name="countries" value="Romance" />
      <Label htmlFor="Romance">Romance</Label>
    </div>
     <div className="flex items-center gap-2">
      <Radio id="Horror" name="countries" value="Horror" />
      <Label htmlFor="Horror">Horror</Label>
    </div>

       <div className="flex items-center gap-2">
      <Radio id="Auto/Biography" name="countries" value="Auto/Biography" />
      <Label htmlFor="Auto/Biography">Auto/Biography</Label>
    </div>
       <div className="flex items-center gap-2">
      <Radio id="Self-Help" name="countries" value="Self-Help" />
      <Label htmlFor="Self-Help">Self-Help</Label>
    </div>
       <div className="flex items-center gap-2">
      <Radio id="Politics" name="countries" value="Politics" />
      <Label htmlFor="Politics">Politics</Label>
    </div>
    
   

  </div>

<div className=' flex justify-evenly gap-5   flex-wrap'>


<Card className='w-80  p-0' style={{backgroundColor:'white', marginTop:'-500' }}>


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

<h4>Book Name</h4>
<p>type</p>
<p>$</p>
<Button>Know More</Button>
</Card>

<Card className='w-80  p-0' style={{backgroundColor:'white', marginTop:'-500' }}>


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

<h4>Book Name</h4>
<p>type</p>
<p>$</p>
<Button>Know More</Button>
</Card>
<Card className='w-80  p-0' style={{backgroundColor:'white', marginTop:'-500' }}>


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

<h4>Book Name</h4>
<p>type</p>
<p>$</p>
<Button>Know More</Button>
</Card>
<Card className='w-80  p-0' style={{backgroundColor:'white', marginTop:'-500' }}>


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

<h4>Book Name</h4>
<p>type</p>
<p>$</p>
<Button>Know More</Button>
</Card>
</div>
</div>

   <AppFooter/>   

    </>
  )
}

export default AllBooks