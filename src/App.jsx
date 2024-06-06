import { useState } from 'react'
import './App.css'
import Pagination from './Pagination';
import Serch from './Serch';
import Stories from './Stories';

function App() {
  

  return (
    <>
     <Serch/>
     <Pagination/>
     <Stories/>
    </>
  )
}

export default App
