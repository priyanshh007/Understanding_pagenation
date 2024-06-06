import React, { useContext } from "react";
import { createContext } from "react";

const AppContext=createContext();
//complete whole react application
const AppProvider=({children})=>{
   return(
<AppContext.Provider value={["Priyanshh","CHici"]}>
{children}
</AppContext.Provider>
   ) 
};

//custom hook creation
const useGlobalContext=()=>{
   return useContext(AppContext);
}

export {AppContext,useGlobalContext};
export default AppProvider;