import React, { useEffect, useState} from 'react'
import { useGlobalContext } from './Context';

function Stories() {
  const{hits,nbPages,removepost}  =useGlobalContext();
  return (
    <div>
        <h2>
            
          {  hits.map((post)=>{
            const {title,author,objectID,url,num_comments}=post;
            return(
                <div key={objectID} className='card'>
                  <h3>{title}</h3>
                  <p> By {author} | {num_comments} comments</p>
                  <div className="card-button">
                    <a href={url} target='_blank'> Read More </a>
                    <a href="#" onClick={()=>removepost(objectID)}> Remove </a>
                  </div>
                </div>
      
                );
                })
          }
          
        </h2>
    </div>
  )
};

export default Stories;