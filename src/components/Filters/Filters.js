import React, { useState, useEffect } from "react";
import { TitleFilters, 
         SpanStars, 
         DivContainer, 
         DivFilters,
         InputFilter
        } 
        from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import useFilter from '../../context/GlobalFilterData';

const Filters = () => {

  const { setFilterData } = useFilter();
  const element = <FontAwesomeIcon icon={faStar} />   
  const [arabian, setArabian] = useState()
  const [brazilian, setBrazilian] = useState()
  const [chinese, setChinese] = useState()
  const [french, setFrench] = useState()
  const [seafood, setSeafood] = useState()
  const [italian, setItalian] = useState()
  const [japanese, setJapanese] = useState()
  const [mexican, setMexican] = useState()
  const [peruvian, setPeruvian] = useState()
  const [arabianCheck, setArabianCheck] = useState(true)
  const [brazilianCheck, setBrazilianCheck] = useState(true)
  const [chineseCheck, setChineseCheck] = useState(true)
  const [frenchCheck, setFrenchCheck] = useState(true)
  const [seafoodCheck, setSeafoodCheck] = useState(true)
  const [italianCheck, setItalianCheck] = useState(true)
  const [japaneseCheck, setJapaneseCheck] = useState(true)
  const [mexicanCheck, setMexicanCheck] = useState(true)
  const [peruvianCheck, setPeruvianCheck] = useState(true) 
  const [data, setData] = useState([]) 

  useEffect(() => {
    async function getData () {
      const data = {
        arabian: arabian,
        brazilian: brazilian,
        chinese: chinese,
        french: french,
        seafood: seafood,
        italian: italian,
        japanese: japanese,
        mexican: mexican,
        peruvian: peruvian
      }

      setFilterData(data)
      
    } getData() 
  },[arabian, brazilian, chinese, french, seafood, italian, japanese, mexican, peruvian]);

  function valueVerify(event, fun,check){
    if(check){
      fun(event.target.value)
    } else {
      fun(null)
    }                 
  } 

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
              <InputFilter type="checkbox"               
              />
              <SpanStars>Até R$50</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>De R$50 à R$80</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>De R$80 à R$110</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"                
              />
              <SpanStars>Acima de R$110</SpanStars>
            </label><br/>
        </DivFilters>
        <DivFilters>
          <TitleFilters>TIPO DE COZINHA</TitleFilters>
          <label>
              <InputFilter type="checkbox"
                value={4}
                onChange={(event) => {
                  setArabianCheck(!arabianCheck);
                  valueVerify(event, setArabian, arabianCheck)
                }}                                         
              />
              <SpanStars>Árabe</SpanStars> 
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={159}
                onChange={(event) => {
                  setBrazilianCheck(!brazilianCheck);
                  valueVerify(event, setBrazilian, brazilianCheck)
                }}                     
              />
              <SpanStars>Brasileira</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={25}
                onChange={(event) => {
                  setChineseCheck(!chineseCheck);
                  valueVerify(event, setChinese, chineseCheck)
                }}                
              />
              <SpanStars>Chinesa</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={45}
                onChange={(event) => {
                  setFrenchCheck(!frenchCheck);
                  valueVerify(event, setFrench, frenchCheck)
                }}                
              />
              <SpanStars>Francesa</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={83}
                onChange={(event) => {
                  setSeafoodCheck(!seafoodCheck);
                  valueVerify(event, setSeafood, seafoodCheck)
                }}                
              />
              <SpanStars>Frutos do mar</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={55}
                onChange={(event) => {
                  setItalianCheck(!italianCheck);
                  valueVerify(event, setItalian, italianCheck)
                }}                
              />
              <SpanStars>Italiana</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={60}
                onChange={(event) => {
                  setJapaneseCheck(!japaneseCheck);
                  valueVerify(event, setJapanese, japaneseCheck)
                }}                
              />
              <SpanStars>Japonesa</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={73}
                onChange={(event) => {
                  setMexicanCheck(!mexicanCheck);
                  valueVerify(event, setMexican, mexicanCheck)
                }}                
              />
              <SpanStars>Mexicana</SpanStars>
            </label><br/>
            <label>
              <InputFilter type="checkbox"
                value={162}
                onChange={(event) => {
                  setPeruvianCheck(!peruvianCheck);
                  valueVerify(event, setPeruvian, peruvianCheck)
                }}                
              />
              <SpanStars>Peruana</SpanStars>
            </label><br/>
        </DivFilters>
    </DivContainer>
  );
};

export default Filters;