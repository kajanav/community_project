import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppContext } from './Context/AppContext';
import Login from './Components/Login';
import AllProducts from './Pages/AllProducts';

const App = () => {
  
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext()
  return (
    <div>

      {showUserLogin ? <Login/> : null}

      <Navbar/>
      <div className={`${isSellerPath}px-6 md:px-16 lg:px-24 xl:px-32`}>
        <Routes>
          <Route path='/products' element={<AllProducts/>}></Route>
          
        </Routes>
      </div>
    </div>
  )
}

export default App