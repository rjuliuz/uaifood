import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import logoHome from "../../imgs/logo-white.jpg";
import { DivContainer, LogoHeader } from "./styled";
import { BASE_URL, header } from "../../constants/urls";
import axios from "axios";


const LandingPage = () =>{

  const [data, setData] = useState([])

const queryData = "florida"

const url = `${BASE_URL}/cities?q=${queryData}`

useEffect(() => {
  async function getData(){
    const response = await axios.get(url, header)
    setData(response.data.location_suggestions)
  }
  getData()
  
},[])

console.log(data)

  return (
    <DivContainer>
      <LogoHeader src={logoHome}/>
      <Header />
    </DivContainer>
  );
};

export default LandingPage;