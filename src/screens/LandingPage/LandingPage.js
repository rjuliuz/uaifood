import HeaderLanding from "../../components/HeaderLanding/HeaderLanding";
import logoHome from "../../imgs/logo-white.jpg";
import { DivContainer, LogoHeader } from "./styled";



const LandingPage = () =>{

  return (
    <DivContainer>
      <LogoHeader src={logoHome}/>
      <HeaderLanding />
    </DivContainer>
  );
};

export default LandingPage;