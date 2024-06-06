import { useState} from 'react'
import './App.css'
import Pagination from './Pagination';
import Serch from './Serch';
import Stories from './Stories';
import { useGlobalContext } from './Context';
function App() {
  const data=useGlobalContext();  

  return (
    <>
      <h4>Welcome {data[0]}</h4>
     <Serch/>
     <Pagination/>
      <Stories/>  
    </>
  )
}

export default App
