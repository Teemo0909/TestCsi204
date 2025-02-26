import { useState } from 'react'
import DataPage from './Component/Data Type/Data.jsx'
import ListExample from './Component/Data Type/ListExample.jsx'
import Student from './Component/Data Type/student.jsx'
import TupleSetExample from './Component/Data Type/set.jsx'
import Json from './Component/Data Type/Json.jsx'
import './App.css'


function App() {

  return (

    <div className='App-container'>
      <h1>Hello World Web App</h1>
      <div className='main-container'>
          <div className='DataPage-container'>
            <DataPage />
          </div>
          
          <div className='ListExample-container'>
            <ListExample />
          </div>

          <div className='ListExample-container'>
            <Student />
          </div>
          <div className='ListExample-container'>
            <TupleSetExample />
          </div>
          <div className='ListExample-container'>
            <Json />
          </div>
      </div>
    </div>
  )
}

export default App
