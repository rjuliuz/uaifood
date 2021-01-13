import React, { useEffect, useState } from "react";
import logoRed from "../../imgs/logo-red.jpg";
import { DivHeader, 
       LogoHeader,
       InputHeader,
       ButtonHeader
    } from "./styled";
import useRequest from '../../context/GlobalStateCities';

const HeaderRestaurants = () => {

  const {setInput, data, getData, input} = useRequest()
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    getData()
  },[input]);


  return (
    <DivHeader>
        <LogoHeader src={logoRed}  />
        <InputHeader 
          type="text"          
          value={input}
          onChange={(e) => {setInput(e.target.value);setDisplay(true)}}        
        />
        <ButtonHeader>BUSCAR</ButtonHeader>
    </DivHeader>
  );
};

export default HeaderRestaurants;