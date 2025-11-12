import { Button, TextInput } from 'flowbite-react';
import Header from '../components/Header'
import { BsSearch } from "react-icons/bs";
import { Card } from "flowbite-react";
import AppFooter from '../../components/AppFooter';
import { Link } from 'react-router-dom';
function Home() {
  return (

    <>
      <Header />

      {/* first section with search */}

      <div style={{ width: '100%', height: '500px', backgroundColor: '#5e5f605e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {/* Text */}
        <div style={{ marginBottom: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 className='text-2xl font-bold italic mb-5' style={{ fontSize: 50, fontWeight: 600 }}>Wonderful Gifts</h2>
          <p className='text-xl font-semibold italic' style={{ fontWeight: 500 }}>Give Your Family And Friends a Book</p>
        </div>

        {/* search bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%' }}>
          <TextInput
            placeholder='Search Your Book'
            type="text"
            rightIcon={BsSearch}
            className=' text-left rounded-full h-10 w-full'
            style={{ backgroundColor: 'white', borderRadius: '50px' }}
          />
        </div>

      </div>
      {/* Second section New Arrivals */}

      <div className='mt-10'>
        {/* Text  */}

        <div className='flex flex-col text-center '>
          <h5 className='text-xl font-semibold italic'>NEW ARRIVALS</h5>
          <h3 className='text-2xl font-bold italic'>Explore Our Latest Collection</h3>
        </div>

        {/* Book display useing cards */}

        <div className='m-10 flex justify-evenly gap-5   flex-wrap'>
          <Card className='w-80  p-0' style={{ backgroundColor: 'white' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

            <h4>Book Name</h4>
            <p>type</p>
            <p>$</p>
            <Link to={'/all-Books'}>
              <Button className='text-center w-full'>Explore More</Button></Link>
          </Card>

          <Card className='w-80  p-0' style={{ backgroundColor: 'white' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />

            <h4>Book Name</h4>
            <p>type</p>
            <p>$</p>
            <Link to={'/all-Books'}>
              <Button className='text-center w-full'>Explore More</Button></Link>
          </Card>
          <Card className='w-80  p-0' style={{ backgroundColor: 'white' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />
            <h4>Book Name</h4>
            <p>type</p>
            <p>$</p>
            <Link to={'/all-Books'}>
              <Button className='text-center w-full'>Explore More</Button></Link>
          </Card>
          <Card className='w-80  p-0' style={{ backgroundColor: 'white' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNXLI4-WxfgDBBiymHzxj-ugg_ZRfyomA-g&s" alt="book-img" className='h-70' width='100%' />
            <h4>Book Name</h4>
            <p>type</p>
            <p>$</p>
            <Link to={'/all-Books'}>
              <Button className='text-center w-full'>Explore More</Button></Link>
          </Card>
        </div>
        {/* Button expolr more */}
        <div className='flex justify-center items-center m-5'>
          <Link to={'/all-Books'}>
            <Button className='text-center'>Explore More</Button></Link>
        </div>
      </div>
      {/* thrid section featured authors */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center m-5 lg:m-10 space-y-8 lg:space-y-0 lg:space-x-10">
        {/* text section */}
        <div className="max-w-xl text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center flex-col mb-4">
            <h5 className="text-sm font-semibold text-gray-500 tracking-widest">FEATURED AUTHORS</h5>
            <h3 className="text-2xl lg:text-3xl font-bold mt-2 text-gray-800">Captivates With Every Word</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae natus nostrum, inventore repellendus culpa sed quasi ad!
            Corrupti provident eveniet vitae recusandae harum ducimus eum iste rem, voluptatum ab similique? Iusto ex illum dolorum illo
            beatae aut molestias est commodi, distinctio expedita fuga tempore ipsum iure consectetur animi dolor cupiditate!
          </p>
          <p className="text-gray-600 text-sm lg:text-base">
            Sequi, harum? Sint nostrum nihil fugiat vel quae sed iure eveniet saepe rerum amet! Deleniti expedita in maiores libero labore
            nobis ab, neque natus quidem voluptate incidunt quaerat pariatur voluptatum?
          </p>
        </div>
        {/* img section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://blog.mugafi.com/wp-content/uploads/2022/05/difference-between-author-and-writer.jpg"
            alt="Featured author"
            className="w-72 sm:w-96 lg:w-[500px] h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      {/* Testimonials */}

      <div className="w-full bg-white py-12 px-6 md:px-20 flex flex-col items-center text-center">
        {/* Heading */}
        <div className="mb-8">
          <h5 className="text-gray-500 tracking-widest text-sm">TESTIMONIALS</h5>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
            See What Others Are Saying
          </h2>
        </div>

        {/* Image & Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtA8ZH2gT93yOOvBbdk22Bq9WyQJv9eR9Gw&s"
            alt="testimonial"
            className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
          />
          <h3 className="font-medium text-lg text-gray-800">Treesa Joseph</h3>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          perspiciatis porro eveniet. Optio necessitatibus provident autem, quam qui,
          dicta molestiae quis quia deleniti aliquam magnam temporibus mollitia ex
          repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, deserunt optio eum dolorum iure consectetur quia facilis
          placeat ea quis explicabo maxime voluptatum unde animi nemo aperiam quos!
        </p>
      </div>

      <AppFooter />
    </>
  )
}

export default Home