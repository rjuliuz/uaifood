import React from "react";
import logoRed from "../../imgs/logo-red.jpg";
import { DivHeader, 
       LogoHeader,
       InputHeader,
       ButtonHeader
    } from "./styled";

const HeaderRestaurants = () => {
  return (
    <DivHeader>
        <LogoHeader src={logoRed} />
        <InputHeader />
        <ButtonHeader>BUSCAR</ButtonHeader>
    </DivHeader>
  );
};

export default HeaderRestaurants;