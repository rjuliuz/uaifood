import React, {useEffect, useState} from "react";
import { 
    DivHeader,     
    Paragraph,
    DivInput,
    InputHeader,
    ButtonHeader,
    DivComplete,
    DivCities,
    CitiesName,
    CitiesState 
} from "./styled";
import { BASE_URL, header } from "../../constants/urls";
import axios from "axios";


const HeaderLanding = () => {

const [data, setData] = useState([]);
const [input, setInput] = useState("");
const [display, setDisplay] = useState(false);


useEffect(() => {
  async function getData(){
    const response = await axios.get(`${BASE_URL}/cities?q=${input}`, header)
    setData(response.data.location_suggestions)
  }
  getData()
  
},[input])


  return (
    <DivHeader>              
      <Paragraph>Descubra os melhores <br/> restaurantes em sua cidade</Paragraph>      
      <DivInput>
        <InputHeader
          type="text"
          placeholder={'Digita o nome de uma cidade'}
          value={input}
          onChange={(e) => {setInput(e.target.value);setDisplay(true)}}
        />
        <ButtonHeader>BUSCAR</ButtonHeader>
      </DivInput>
      <DivComplete>        
        {display && (
        data
          .map((value) => {
          return(
            <DivCities onClick={()=>{setInput(value.name);setDisplay(false)}}>
              <CitiesName>{value.name}</CitiesName>
              <CitiesState>{value.state_name}</CitiesState>
            </DivCities>
          )
          })
        ) 
        }
      </DivComplete>      
    </DivHeader>
  );
};

export default HeaderLanding;