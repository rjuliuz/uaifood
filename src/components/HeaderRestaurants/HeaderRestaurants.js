import React, { useEffect, useState } from "react";
import logoRed from "../../imgs/logo-red.jpg";
import { DivRestaurants, 
       LogoHeader,
       InputHeader,
       ButtonHeader,
       DivComplete,
       SpanMark,
       DivCities,
       CitiesName,
       CitiesState
    } from "./styled";
import useRequest from '../../context/GlobalStateCities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const HeaderRestaurants = () => {

  const {setInput, data, getData, input, citieId, setCitiesId} = useRequest()
  const [display, setDisplay] = useState(false);
  

  useEffect(() => {
    getData()
  },[input]);

  
  return (
    <DivRestaurants>
        <LogoHeader src={logoRed} />
        <SpanMark><FontAwesomeIcon icon={faMapMarkerAlt} /></SpanMark>
        <InputHeader 
          type="text"     
          value={input}
          onChange={(e) => {setInput(e.target.value);setDisplay(!display)}}       
        />        
        <ButtonHeader>BUSCAR</ButtonHeader>      
        
        
        {display && (
         data
          .map((value) => {
            return(
              <DivComplete>
                <DivCities onClick={()=>{setCitiesId(value.id);setInput(value.name);setDisplay(!display)}}>
                <CitiesName>{value.name}</CitiesName>
                <CitiesState>{value.state_name}</CitiesState>
             </DivCities>
             </DivComplete>
           )})
        )
      }
    </DivRestaurants>
  );
};

export default HeaderRestaurants;