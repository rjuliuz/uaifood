import styled from "styled-components";

export const DivHeader = styled.div`    
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  position: relative;    
`

export const Paragraph = styled.p`
  color: #fff;
  font-size: 60pt;    
  font-weight: 800;
  line-height: 1;
`

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;        
`

export const InputHeader = styled.input`
  width: 49vw;
  height: 60px;
  font-size: 24pt;
  font-weight: 600;
  color: #767676;
  padding-left: 30px;   
`

export const ButtonHeader = styled.button`
  width: 300px;
  height: 50px;    
  margin-left: 30px;
  font-size: 24pt;
  font-weight: 600;
  color: #fff;
  background-color: #39b54a;
  cursor: pointer;
`

export const DivComplete = styled.div`
  width: 49vw;
  height: 100%;
  background-color: #fff;
  border-top: 1px solid black;
  max-height: 200px; 
  overflow-y : scroll;
  padding-left: 30px;        
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