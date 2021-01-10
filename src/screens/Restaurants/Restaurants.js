import React from "react";
import HeaderRestaurants from "../../components/HeaderRestaurants/HeaderRestaurants";
import Filters from "../../components/Filters/Filters";
import { DivContainer, DivMain } from "./styled";

const Restaurants = () => {
  return (
    <DivContainer>
      <HeaderRestaurants />
      <DivMain>
        <Filters />
      </DivMain>      
    </DivContainer>
  );
};

export default Restaurants;