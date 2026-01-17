import React from 'react'
import Header from '../components/Header'
import AppFooter from '../../components/AppFooter'
import { Link } from 'react-router-dom'

function Paymentsuccess() {
  return (
    <div>
       <Header/>
      <div class="flex flex-col justify-center align-center w-full">
  <div class=" flex flex-col justify-center  align-center text-center">
    <img src="https://www.lappymaker.com/images/greentick-unscreen.gif" alt="" className='h-60 w-50 ml-170' />

  <p className='text-green-500 text-4xl font-extrabold'>Payment Successfull...🎉✨</p>
  <p className='text-2xl text-amber-950 my-5'>Contiue to Shop</p>
  <p>Thanks for trusting Us</p>
  <Link to={'/all-Books'}>
    <button className='bg-amber-950 p-5 rounded-full text-amber-50 shadow-2xl my-4  '>Keep Shopping</button>

  </Link>
  </div>

</div>
<AppFooter/>
    </div>
  )
}

export default Paymentsuccess