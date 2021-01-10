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
const [queryData, setQueryData] = useState("");

	
const onChangeInput = (event) => {
  setQueryData(event.target.value)   
}

useEffect(() => {
  async function getData(){
    const response = await axios.get(`${BASE_URL}/cities?q=${queryData}`, header)
    setData(response.data.location_suggestions)
  }
  getData()
  
},[queryData])

console.log(data)


  return (
    <DivHeader>              
      <Paragraph>Descubra os melhores <br/> restaurantes em sua cidade</Paragraph>      
      <DivInput>
        <InputHeader
          placeholder={'Digita nome de uma cidade'}
          value={queryData}
          onChange={onChangeInput}
        />
        <ButtonHeader>BUSCAR</ButtonHeader>
      </DivInput>
      <DivComplete>
        {data.map((cities) => {
          return (
            <DivCities>
              <CitiesName>{cities.name}</CitiesName>
              <CitiesState>Estado: {cities.state_name}</CitiesState>
            </DivCities>
          );
        })}
      </DivComplete>      
    </DivHeader>
  );
};

export default HeaderLanding;