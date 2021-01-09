import React from "react";
import { 
    DivHeader,     
    Paragraph,
    DivInput,
    InputHeader,
    ButtonHeader,
    DivComplete 
} from "./styled";


const Header = () => {
  return (
    <DivHeader>              
      <Paragraph>Descubra os melhores <br/> restaurantes em sua cidade</Paragraph>      
      <DivInput>
        <InputHeader></InputHeader>
        <ButtonHeader>BUSCAR</ButtonHeader>
      </DivInput>
      <DivComplete>
        Teste
      </DivComplete>      
    </DivHeader>
  );
};

export default Header;