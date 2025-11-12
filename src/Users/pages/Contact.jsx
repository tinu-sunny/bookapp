import Header from '../components/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AppFooter from '../../components/AppFooter';
import { Button, Card, Textarea, TextInput } from 'flowbite-react';
function Contact() {
  return (
    <>
      <Header />
      {/* heading */}
      <div>
        <h3 className='text-center font-bold text-2xl mt-4 italic'>Contacts</h3>
        <p className='text-center p-5 ml-25 mr-25 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem corrupti doloremque veniam assumenda at, magi nesciunt molestias praesentium possimus blanditiis velit!
          Amet dolore tempore quos repudiandae excepturi facilis esse quibusdam voluptates alias reiciendis quam quo corporis dolorum, omnis sunt evenietevenietevenietevenieteveniet laborum impedit, veniam quis cupiditate veritatis tenetur voluptatem? Error, labore ex.</p>
      </div>

      {/* Contact details */}

      <div className='flex justify-evenly justify-center mt-10 p-4'>
        {/* location */}
        <p className='flex'> <span><FaLocationDot /></span><span className='ml-2'>123 main Street Apt.43 Anytown </span></p>
        {/* phone */}
        <p className='flex'> <span><FaPhoneAlt /></span><span className='ml-2' >+91 854682478</span></p>

        {/* email */}
        <p className='flex'> <span><SiGmail /></span>
          <span className='ml-2'>  td@gmail.com</span>
        </p>
      </div>

      {/* Map and feedback section */}

      <div className='flex  items-center justify-center gap-5  mb-5 '>
        {/* form */}
        <Card className='p-5' style={{ width: '500px' }}>
          <TextInput placeholder='Name'></TextInput>
          <TextInput placeholder='Email Id'></TextInput>
          <Textarea></Textarea>
          <Button>Send</Button>
        </Card>
        {/* Map */}
        <div className='shadow-2xl '   >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.322621959554!2d76.3521509!3d10.03082935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c613b995a8d%3A0xb78d96fcf1f494d0!2sRECCAA%20Club!5e0!3m2!1sen!2sin!4v1762878575288!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <AppFooter />
    </>
  )
}

export default Contact