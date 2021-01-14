import styled from "styled-components"
import FotoRest from "../../imgs/rest.jpg";


export const DivMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;  
`
export const DivContainer = styled.div`
  width: 600px;
  margin: 20px 25px;
  height: 400px;
  border: 1px solid #D3D3D3;
`

export const DivPhoto = styled.div`
  width: 600px;
  height: 200px;     
`

export const ImgRestaurant = styled.img`
  width: 600px;
  height: 200px;
`
export const DivInfos = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;  
`
export const NameRest = styled.p`
  font-size: 20pt;
  font-weight: 600;
  color: #333;
  margin: 5px 20px;
  line-height: 1;  
`

export const InfoRest = styled.p`
  font-size: 18pt;
  font-weight: 300;
  color: #A5A5A5;
  margin: 0 20px;
  line-height: 1;
`

export const StarRest = styled.span`
  font-size: 14pt;
  color: #39B54A;
  font-weight: 300;  
  margin-left: 20px;
`

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;  
  margin-top: 14px;  
`

export const PriceButton = styled.button`
  width: 150px;
  height: 35px;
  font-size: 18pt;
  font-weight: 600;
  margin-left: 20px;
  color: #fff;
  background-color: #39b54a;
  cursor: pointer; 
`

export const CuisineButton = styled.button`
  height: 35px;
  font-size: 18pt;
  font-weight: 300;
  margin-left: 20px;
  color: #484848;
  padding: 0 15px;
  background-color: #d3d3d3;
  cursor: pointer; 
`

export const UserSpan = styled.span`
  font-size: 18pt;
  color: #fff;
`