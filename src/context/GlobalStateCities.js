import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { BASE_URL, header } from "../constants/urls";

const RequestContext = createContext()

export const RequestProvider = ({children}) =>{

    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [citieId, setCitiesId] = useState("");

    const getData  = () => {
      axios
        .get(`${BASE_URL}/cities?q=${input}`, header)
        .then((response) => setData(response.data.location_suggestions))
        .catch((error) => console.log(error.message));
    };   

    return(
        <RequestContext.Provider value={{ 
          input,
          setInput,
          data,
          setData,
          getData,
          citieId,
          setCitiesId

          }}>
            {children}
        </RequestContext.Provider>
    )
}

export default function useRequest(){
  const request = useContext(RequestContext)
  const {input, setInput, data, setData, getData, citieId, setCitiesId} = request
  return {input, setInput, data, setData, getData, citieId, setCitiesId}
}