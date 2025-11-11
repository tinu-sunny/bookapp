
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Users/pages/Home";
import Auth from "./pages/Auth";
import AllBooks from "./Users/pages/AllBooks";
import Viewbook from "./Users/pages/Viewbook";
import Careers from "./Users/pages/Careers";
import Contact from "./Users/pages/Contact";
import Profile from "./Users/pages/Profile";
import AdminHome from "./admin/pages/AdminHome";
import AdminBooks from "./admin/pages/AdminBooks";
import AdminCareers from "./admin/pages/AdminCareers";
import AdminSettings from "./admin/pages/AdminSettings";
import Paymentsuccess from "./Users/pages/Paymentsuccess";
import Paymenterror from "./Users/pages/Paymenterror";
import PageNotFound from "./pages/PageNotFound";

function App() {


  return (
    <>

  
   


  <Routes>
    <Route path="/" element={<Home/>}/>

            <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/all-Books' element={<AllBooks />} />
        <Route path='/view-books/:id' element={<Viewbook />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin-home' element={ <AdminHome /> } />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-careers' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />
        <Route path='/payment-success' element={<Paymentsuccess />} />
        <Route path='/payment-error' element={<Paymenterror />} />

        <Route path='*' element={<PageNotFound/>} />

  </Routes>
    </>
  )
}

export default App
