import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, header } from "../../constants/urls";
import useRequest from '../../context/GlobalStateCities';


const Cards = () => {

  const { data, setData, citieId, setCitiesId } = useRequest()
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants  = () => {
        axios
          .get(`${BASE_URL}/search?entity_id=${citieId}&entity_type=city`, header)
          .then((response) => setRestaurants(response.data.restaurants))
          .catch((error) => console.log(error.message));
      };
    getRestaurants()
  },[]);
  
  console.log(restaurants)
  return (
    <div>
        cards
    </div>
  );
};

export default Cards;