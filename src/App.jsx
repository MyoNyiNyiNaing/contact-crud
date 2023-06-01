import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import "./App.css"
import Update from './pages/Update'
import Detail from './pages/Detail'


const App = () => {
  return (
    <div className=' font-roboto'>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
