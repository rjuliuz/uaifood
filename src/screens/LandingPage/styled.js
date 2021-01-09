import styled from "styled-components";
import bg from "../../imgs/bg.jpg";

export const DivContainer = styled.div`
    widht: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;    
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;       
`

export const LogoHeader = styled.img`
    width: auto;
    height: 60px;
    margin: 50px auto 0;      
`