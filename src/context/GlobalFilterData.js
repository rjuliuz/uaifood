import React, { useState, createContext, useContext } from "react";

const FilterContext = createContext()

export const FilterProvider = ({children}) =>{
    
    const [filterData, setFilterData] = useState([]);
    
    return(
        <FilterContext.Provider value={{ 
          filterData,
          setFilterData

          }}>
            {children}
        </FilterContext.Provider>
    )
}

export default function useFilter(){
  const request = useContext(FilterContext)
  const { filterData, setFilterData } = request
  return {filterData, setFilterData}
}