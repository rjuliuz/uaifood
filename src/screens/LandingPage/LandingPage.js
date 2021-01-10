import Header from "../../components/Header/Header";
import logoHome from "../../imgs/logo-white.jpg";
import { DivContainer, LogoHeader } from "./styled";



const LandingPage = () =>{

  return (
    <DivContainer>
      <LogoHeader src={logoHome}/>
      <Header />
    </DivContainer>
  );
};

export default LandingPage;