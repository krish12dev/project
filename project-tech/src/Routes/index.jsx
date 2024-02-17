import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Components/Layout';
import ServicePage from '../Page/Service';
import ContactForm from '../Page/ContactUs';

const RoutePage = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                {/* <Route index element={<ServicePage/>}/>
                <Route path='/contact' element={<ContactForm/>}/> */}
            </Route>
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default RoutePage
