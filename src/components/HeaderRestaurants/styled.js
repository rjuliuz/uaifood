import styled from "styled-components";

export const DivRestaurants = styled.div`
  width: 100%;
  height: 100px;
  display: flex;    
  border: 1px solid black;
  align-items: center;
  box-shadow: 6px 3px 3px #D3D3D3;
  position: relative;    
`

export const LogoHeader = styled.img`
  width: 7%;
  height: auto;
  margin-left: 5%;
`

export const InputHeader = styled.input`
  width: 60%;
  height: 60px;
  margin-left: 8%;
  padding-left: 50px;
  font-size: 24pt;
  font-weight: 600;
  color: #767676;
  border: 1px solid black;
`

export const ButtonHeader = styled.button`
  width: 10%;
  height: 60px;
  margin-left: 2%;
  font-size: 18pt;
  font-weight: 600;
  color: #fff;
  background-color: #39b54a;
  cursor: pointer;
`

export const DivComplete = styled.div`
  width: 60%;
  height: 100%;
  max-height: 200px; 
  left: 22.5%;
  top: 81px;
  position: absolute;
  z-index: 100;
  background-color: #fff;    
  overflow-y : scroll;  
`

export const SpanMark = styled.span`  
  font-size: 30pt;
  color: #484848;
  font-weight: 300;  
  margin: auto 10px 0 auto;  
  position: absolute;
  left: 20.5%;   
`

export const DivCities = styled.div`
  padding-top: 10px; 
`

export const CitiesName = styled.p`
  font-size: 24pt;
  font-weight: 300;
  color: #484848;
`

export const CitiesState = styled.p`
  font-size: 14pt;
  font-weight: 300;
  color: #767676;
`