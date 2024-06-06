import React from 'react'
import { useGlobalContext } from './Context'

function serch() {
  const {query,searchPost}=useGlobalContext();
  return (
    <>
    <h2>Tech News Display Website</h2>
    <form className='search_box'>
      <div className='search'>
        <input type='text' placeholder='search here!!'
         value={query} onChange={(e)=>searchPost(e.target.value)}
        >
        
        </input>
      </div>
    </form>
    </>
  )
}

export default serch