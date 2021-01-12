import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { BASE_URL, header } from "../constants/urls";

////criando um context expecifico eiii.... vou ir pra casa.. fechar aqui e subir pro git... segura uns 20 min.deu horáriofechou 
const RequestContext = createContext()

export const RequestProvider = ({children}) =>{

    
    
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const getData  = () => {
      if(input === null) {
        console.log("Primeiro defina uma cidade para o filtro")
        return false
      }

      axios
        .get((`${BASE_URL}/cities?q=${input}`, header))
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
          }}>

        </RequestContext.Provider>
    )
}


export default function useRequest(){
  const request = useContext(RequestContext)
  const {input, setInput, data, setData, getData} = request
  return {input, setInput, data, setData, getData}
}

   