import React, { useEffect, useState } from "react";
import { 
    DivHeader,     
    Paragraph,
    DivInput,
    InputHeader,
    ButtonHeader,
    DivComplete,
    DivCities,
    CitiesName,
    CitiesState,
    SpanMark 
} from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import useRequest from '../../context/GlobalState'

const HeaderLanding = () => {

  const {setInput, data, getData, input} = useRequest()

const [display, setDisplay] = useState(false);
//testeaee

useEffect(() => {
  getData()
},[input]);


console.log(input)
  return (
    <DivHeader>              
      <Paragraph>Descubra os melhores <br/> restaurantes em sua cidade</Paragraph>      
      <DivInput>
        <SpanMark><FontAwesomeIcon icon={faMapMarkerAlt} /></SpanMark>
        <InputHeader
          type="text"          
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