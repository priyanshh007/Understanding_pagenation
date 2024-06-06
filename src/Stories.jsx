import React, { useEffect, useState} from 'react'


function Stories() {
     let [isLoading,setIsLoading]=useState(1)
    let API="https://hn.algolia.com/api/v1/search?HTML";
    const fetchApiData=async(url)=>{
      try{
         const res=await fetch(url);
         const data=await res.json();
         console.log(data);
         setIsLoading(0);
      }
      catch(error){
        console.log(error);
      }
    }
    useEffect(()=>{
      fetchApiData(API);
    },[]);

    if(isLoading)
    {
        return <>
        <h2>  Loading.....</h2>
        </>
    }
    console.log(isLoading);
    return (
    <div>
        <h2>
            My Tech News Post
        </h2>
    </div>
  )
};

export default Stories;