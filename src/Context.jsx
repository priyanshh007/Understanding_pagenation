import React, { useContext, useReducer, useEffect, useState } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_STORIES",
              payload:
              {
                 hits:data.hits,
                 nbPages:data.nbPages,
              } });
       console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //to remove post
  const removepost=(id)=>{
    dispatch({type:"REMOVE_POST",payload:id}); 
   // console.log(id);
  }

  //serch funtionality
  const searchPost=(searchquery)=>{
     dispatch({type:"SEARCH_QUERY" ,
      payload:searchquery,
     })
  }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}`);
  }, [state.query]);

  if (isLoading) {
    return (
      <h2>Loading.....</h2>
    );
  }


  return (
    <AppContext.Provider value={{...state,removepost,searchPost}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext };
export default AppProvider;
