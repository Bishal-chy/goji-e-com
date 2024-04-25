
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import styled from "styled-components";

const Star = ({stars,reviews}) => {
  const ratingstar =  Array.from({length:5}, (elem, index)=>{

        let number = index + 0.5;
        debugger;

        return (

            <span key={index}>
            {
                stars >= index + 1 ? (<FaStar className="icons" />) 
                : stars >= number ? (<FaStarHalfAlt className="icons" />):
                 (<FaRegStar className="icons" />)
            }

            </span>
        )



    });
  return (
    <Wrapper>
        <div className="icon-style">
        {ratingstar}
        <p>({reviews} customers reviews)</p>
             
        </div>
    </Wrapper>
      
    
  )
};
const Wrapper = styled.section`
.icon-style{
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

.icons{
    font-size: 2rem;
    color: orange;
}

.empty-icons{
    font-size: 2.6rem;
}

p{
    margin: 0;
    padding-left:1.2rem;
}


}

`;


export default Star
