import React, { useContext, useEffect, useState } from "react";
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
import GlobalStateContext from "../../global/GlobalStateContext";

const HeaderLanding = () => {

const { states, setters, requests } = useContext(GlobalStateContext);
const [display, setDisplay] = useState(false);


useEffect(() => {
  requests.getData();
},[states.input]);

  return (
    <DivHeader>              
      <Paragraph>Descubra os melhores <br/> restaurantes em sua cidade</Paragraph>      
      <DivInput>
        <SpanMark><FontAwesomeIcon icon={faMapMarkerAlt} /></SpanMark>
        <InputHeader
          type="text"          
          value={states.input}
          onChange={(e) => {setters.setInput(e.target.value);setDisplay(true)}}
        />
        
        <ButtonHeader>BUSCAR</ButtonHeader>
      </DivInput>
      <DivComplete>        
        {display && (
        states.cities
          .map((value) => {
          return(
            <DivCities onClick={()=>{setters.setInput(value.name);setDisplay(false)}}>
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