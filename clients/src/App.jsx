import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// link Router and Bootstrap 
// import {BrowserRouter, Routes, Route}
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter}
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
import Home from './Components/Home'


function App() {

  return (
    <>
        
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Users></Users>}></Route>
              <Route path='/create' element={<CreateUser></CreateUser>}></Route>
              <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
