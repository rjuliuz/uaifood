import React from "react";
import { TitleFilters, 
         SpanStars, 
         DivContainer, 
         DivFilters,
         InputFilter
        } 
        from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const Filters = () => {
  const element = <FontAwesomeIcon icon={faStar} />
  
  
  return (
    <DivContainer>
        <DivFilters>
            <TitleFilters>NOTA</TitleFilters>
            <label>
              <InputFilter type="checkbox"              
              />
              <SpanStars>{element}</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>{element}{element}</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>{element}{element}{element}</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>{element}{element}{element}{element}</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>{element}{element}{element}{element}{element}</SpanStars>
            </label>            
        </DivFilters>
        <DivFilters>
          <TitleFilters>CUSTO PARA 2 PESSOAS</TitleFilters>
          <label>
              <input type="checkbox"               
              />
              <SpanStars>Até R$50</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>De R$50 à R$80</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>De R$80 à R$110</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Acima de R$110</SpanStars>
            </label><br/>
        </DivFilters>
        <DivFilters>
          <TitleFilters>TIPO DE COZINHA</TitleFilters>
          <label>
              <input type="checkbox"               
              />
              <SpanStars>Árabe</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Brasileira</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Chinesa</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Francesa</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Frutos do mar</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Italiana</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Japonesa</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Mexicana</SpanStars>
            </label><br/>
            <label>
              <input type="checkbox"                
              />
              <SpanStars>Peruana</SpanStars>
            </label><br/>
        </DivFilters>
    </DivContainer>
  );
};

export default Filters;