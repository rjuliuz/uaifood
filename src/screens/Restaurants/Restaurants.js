import React from "react";
import HeaderRestaurants from "../../components/HeaderRestaurants/HeaderRestaurants";
import Filters from "../../components/Filters/Filters";
import { DivContainer, DivMain } from "./styled";
import Cards from "../../components/Cards/Cards";

const Restaurants = () => {
  return (
    <DivContainer>
      <HeaderRestaurants />
      <DivMain>
        <Filters />
        <Cards />
      </DivMain>      
    </DivContainer>
  );
};

export default Restaurants;