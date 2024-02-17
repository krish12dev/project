import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Components/Layout';
import ServicePage from '../Page/Service';

const RoutePage = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route index='/' element={<Layout/>}>
            </Route>
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default RoutePage
