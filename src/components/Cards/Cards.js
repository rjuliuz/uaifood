import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, header } from "../../constants/urls";
import useRequest from '../../context/GlobalStateCities';
import useFilter from '../../context/GlobalFilterData';
import { DivMain,
         DivContainer,
         DivPhoto,
         DivInfos,
         ImgRestaurant,
         InfoRest,
         NameRest,
         StarRest,
         DivButtons,
         PriceButton,
         CuisineButton,
         UserSpan 
      } from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import generic from '../../assets/generic.svg'

const Cards = () => {

  const { data, setData, citieId } = useRequest();
  const { filterData } = useFilter();
  const [restaurants, setRestaurants] = useState([]);
  const element = <FontAwesomeIcon icon={faStar} />;
  const user = <FontAwesomeIcon icon={faUserFriends} />;

  useEffect(() => {
    const getRestaurants  = () => {    

        axios
          .get(`${BASE_URL}/search?entity_id=${citieId}&entity_type=city&cuisines=${filterData.arabian},${filterData.brazilian},${filterData.chinese},${filterData.french },${filterData.seafood },${filterData.italian },${filterData.japanese },${filterData[7] },${filterData.mexican},${filterData.peruvian }`, header)
          .then((response) => setRestaurants(response.data.restaurants))
          .catch((error) => console.log(error.message));
      };
    getRestaurants()
  },[citieId, filterData]);
  
  const restaurantsList = restaurants.map((value) => {
    return (
      <DivContainer key={value.id}>
          <DivPhoto>
            <ImgRestaurant src={value.restaurant.featured_image || generic} alt="Imagem Restaurante"/>          
          </DivPhoto>
          <DivInfos>
            <NameRest>{value.restaurant.name}</NameRest>
            <InfoRest>{value.restaurant.location.address}</InfoRest>
            <StarRest>{element}{element}{element}</StarRest>
          </DivInfos>
          <DivButtons>
            <PriceButton><UserSpan>{user} </UserSpan>{value.restaurant.currency}{value.restaurant.average_cost_for_two}</PriceButton>
            <CuisineButton>{value.restaurant.cuisines}</CuisineButton>
          </DivButtons>
      </DivContainer>
    )    
  })  
  
  return (
    <DivMain>      
      {restaurantsList}
    </DivMain>
    
  );
};

export default Cards;