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
import useRequest from '../../context/GlobalStateCities';
import { useHistory } from "react-router-dom";
import { goToRestaurants } from "../../routes/coordinator";

const HeaderLanding = () => {

const history = useHistory();
const {setInput, data, getData, input, citieId, setCitiesId} = useRequest()
const [display, setDisplay] = useState(false);

  useEffect(() => {
    getData()
  },[input]);


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
        <ButtonHeader onClick={() => goToRestaurants(history)}>BUSCAR</ButtonHeader>
      </DivInput>
      <DivComplete>        
        {display && (
        data
          .map((value) => {
          return(
            <DivCities onClick={()=>{setCitiesId(value.id);setInput(value.name);setDisplay(false)}}>
              <CitiesName>{value.name}</CitiesName>
              <CitiesState>{value.state_name}</CitiesState>
            </DivCities>
          )})
        )}
      </DivComplete>      
    </DivHeader>
  );
};

export default HeaderLanding;