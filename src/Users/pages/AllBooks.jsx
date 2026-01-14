import Header from '../components/Header'
import { Button, Card, TextInput } from 'flowbite-react'
import { FaSearch } from "react-icons/fa";
import { Label, Radio } from "flowbite-react";
import AppFooter from '../../components/AppFooter';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { viewbooks } from '../../Services/allAPIs';

function AllBooks() {
     const [token,setToken]=useState('')
     const[allBooks,setAllBooks]=useState([])
     const [ sortbook,setSortbook]=useState([])
     console.log(sortbook);
     
     console.log(allBooks);
     
   
     useEffect(()=>{
       setToken(sessionStorage.getItem("token"))
     },[])
     console.log(token);


     const viewAllBooks = async()=>{
const reqHeader = {
        Authorization:`Bearer ${token}`,
      };
      console.log(reqHeader);
          
      const response = await viewbooks(reqHeader)
      console.log(response);
      
      if(response.status==200){
         const books = response.data.allbooks
        setAllBooks(books)

  setSortbook(books)

      console.log(books);

      }

      }
     useEffect(()=>{
      viewAllBooks();
      
     },[token])


     const sort = (keyword)=>{
console.log(keyword);

if(keyword=='Nofilter'){
  setSortbook(allBooks)
}
else{
      const sortdata = allBooks.filter(item =>
  item.category.toLowerCase().trim()==keyword.toLowerCase().trim());
     setSortbook(sortdata)
}

     }
     
      
  return (
    <>
      <Header />

      {/* Heading */}

    { token?<div> <div className='text-center mt-10 px-4'>
        <h2 className=' text-3xl md:text-4xl 0 font-bold italic m-8'>Collections</h2>
        {/* search bar */}
        <div className='flex  justify-center item-center '>
          <TextInput className='w-64 sm:w-80 md:w-[500px] bg-white text-black' placeholder='Search Books ...' />
          <Button className='ml-2'>
            <FaSearch className=" h-4 w-4 " />
          </Button>
        </div>
      </div>
      {/* main content */}

      <div className='flex flex-col md:flex-row mt-10 justify-start item-start gap-6 px-4'>
        {/* Side bar */}
        <div className="w-full md:w-1/4 md:sticky md:top-20 p-4   rounded-lg h-50 mb-50">
          <h3 className='text-lg font-semibold mb-4'>Filters</h3>

          <div className=' space-y-3 mb-4'>
            <div className="flex items-center gap-2  m-4">
              <Radio id="No-filter" name="countries" value="Nofilter"  onClick={()=>{sort('Nofilter')}} defaultChecked />
              <Label htmlFor="No-filter">No-filter</Label>
            </div>
            <div className="flex items-center gap-2  m-4 text-black">
              <Radio id=" Literary Fiction" name="countries" value=" Literary Fiction" onClick={()=>{sort('Literary Fiction')}}/>
              <Label htmlFor=" Literary Fiction"> Literary Fiction</Label>
            </div>
            <div className="flex items-center  m-4 gap-2">
              <Radio id="Philosophy" name="countries" value="Philosophy" onClick={()=>{sort('Philosophy')}} />
              <Label htmlFor="Philosophy">Philosophy</Label>
            </div>
            <div className="flex items-center  m-4 gap-2">
              <Radio id="Thriller" name="countries" value="Thriller" onClick={()=>{sort('Thriller')}}/>
              <Label htmlFor="Thriller">Thriller</Label>
            </div>
            <div className="flex items-center m-4 gap-2">
              <Radio id="Romance" name="countries" value="Romance"onClick={()=>{sort('Romance')}} />
              <Label htmlFor="Romance">Romance</Label>
            </div>
            <div className="flex items-center m-4 gap-2">
              <Radio id="Horror" name="countries" value="Horror" onClick={()=>{sort('Horror')}} />
              <Label htmlFor="Horror">Horror</Label>
            </div>

            <div className="flex items-center m-4 gap-2">
              <Radio id="Auto/Biography" name="countries" value="Auto/Biography" onClick={()=>{sort('Auto Biography')}} />
              <Label htmlFor="Auto/Biography">Auto/Biography</Label>
            </div>
            <div className="flex items-center  m-4 gap-2">
              <Radio id="Self-Help" name="countries" value="Self-Help" onClick={()=>{sort('Self Help')}} />
              <Label htmlFor="Self-Help">Self-Help</Label>
            </div>
            <div className="flex items-center  m-4 gap-2">
              <Radio id="Politics" name="countries" value="Politics" onClick={()=>{sort('Politics')}}/>
              <Label htmlFor="Politics">Politics</Label>
            </div>
          </div>

        </div>

        {/* books Grid */}

        <div className='w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
         { sortbook &&  sortbook.length > 0 ? sortbook.map((item,index)=>(<Card className='w-80  p-0' style={{ backgroundColor: 'white' }}>
            <img src={item.imageUrl} alt="book-img" className='h-70' width='100%' />
            <h4>{item.title}</h4>
            <p>{item.category}</p>
            <p>${item.price}</p>
          
            <Link to={`/view-books/${item._id}`}><Button>Know More</Button></Link>
          </Card>)) :<h1>No Books Found in this category</h1>}
        </div>
      </div> </div>: <div className='text-center m-10 font-bold text-4xl'><h1>Please Login to asses the books</h1><Link to={'/login'}> <div className='hover:underline hover:text-blue-800 text-blue-500 '>Login</div></Link></div>}

      <div> <AppFooter />   </div>

    </>
  )
}

export default AllBooks