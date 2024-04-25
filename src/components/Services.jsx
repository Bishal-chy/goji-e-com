import styled from "styled-components";
import { ImTruck } from "react-icons/im";
import { SiSecurityscorecard } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
    <div className="container">
    <div className="grid grid-third-column">
    <div className="services-1">
    <div className="service-item">
    <ImTruck  className="icon"/>
    <h3 className="paragraph">Free Delivery Service</h3>
    </div>
    
    </div>
    <div className="services-2">
    <div className="services-column-2">
      <div className="service-item">
      <SiSecurityscorecard className="icon" />
      <h3 className="paragraph" >Non-contact Shipping</h3>
    </div>
    </div>
    <div className="services-column-2">
    <div>
    <GiReceiveMoney className="icon" />
      <h3>Money-back Guarranted</h3>
    </div>
    </div>
    </div>
    <div className="services-3">
    <div  className="service-item">
    <RiSecurePaymentFill  className="icon"/>
    <h3 className="paragraph">
    Secured Payment System
    </h3>

    </div>

    </div>

    
    </div>
    </div>

    </Wrapper>
  )
};
const Wrapper = styled.section`

padding: 9rem 0;

.grid {
  gap: 4.8rem;
}

.services-1,
.services-2,
.services-3{
  width: auto;
  height: 30rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-content:center;
  background:${({theme})=> theme.colors.bg};
  text-align:center;
  border-radius:2rem;
  box-shadow:rgba(0,0,0,0.05) 0px 1px 2px 0px;

}

.services-2{
 gap: 4rem;
 background-color:transparent;
 box-shadow:none;
}

.services-column-2{
  background: ${({theme})=> theme.colors.bg};
  display: flex;
  flex-direction: row;
  flex:1;
  justify-content: center;
  align-items: center;
  border-radius:2rem;
  box-shadow:rgba(0,0,0,0.5) 0px 1px 2px 0px;

  div{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

}

.service-item{
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .paragraph{
    padding-bottom:1.1rem;
  }
}

.icon{
  width: 3.2rem;
  font-size:x-large;
  color: ${({theme})=> theme.colors.helper};
}




`;



export default Services;
