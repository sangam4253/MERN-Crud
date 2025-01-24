import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './assets/Users'
import CreateUser from './assets/CreateUser'
import UpdateUser from './assets/UpdateUser'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Users/>}> </Route>  
        <Route path='/create'element={<CreateUser/>}> </Route>
        <Route path='/update/:id'element={<UpdateUser/>}> </Route>

      </Routes> 
      </BrowserRouter>
        
    </div>
  )  
}

export default App
