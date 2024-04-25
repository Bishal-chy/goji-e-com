import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaTruckPlane } from "react-icons/fa6";
import Star from "./Star";
import AddToCart from "./AddToCart";





const API = "https://api.pujakaitem.com/api/products";
const Singleproducts = () => {
  const {getSingleProduct,isSingleLoading,singleproduct} = useGlobalContext ();


  const {id} = useParams();
  const {id:alias,name,company,price,description,category,stock,stars,reviews,image} = singleproduct;

  
  
  
  
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);

  },[]);

  if (isSingleLoading){
    return<div className="page_loading">....loading</div>;
  }
  return (
    <Wrapper>
      <PageNavigation title= {name} />
        <div className="container">
        <div className="grid grid-two-column">
          {/* Product image*/}
          <div className="product_images">
          <MyImage  imgs={image}/>
         

          
        </div>
        {/* product data*/}
        <div className="product_data">
        <h2>{name}</h2>
        <Star stars={stars} reviews={reviews} />
        <p className="product-data-price">
        <del>
          <FormatPrice  price ={price  + 250000}/>
        </del>
        </p>

        <p className="product-data-price">
        Deal of the day: <FormatPrice  price ={price}/>
        </p>
        <p>
          {description}
        </p>
        <div className="product-data-warranty">
        <div className="product-warranty-data">
        <FaTruck  className ="warranty-icons" />
        <p>Free Delivery</p>
        </div>
        <div className="product-warranty-data" >
        <TbReplace  className="warranty-icons"/>
        <p>30 Days Replacement</p>
        </div>
        <div className="product-warranty-data" >
        <MdSecurity  className="warranty-icons"/>
        <p>3 Year Warranty</p>
        </div>
        <div className="product-warranty-data" >
        <FaTruckPlane className="warranty-icons"/>
        <p>24hrs Delivery</p>
        </div>
         </div>
         <div className="product-data-info">
         <p>
          Available:<span> {stock>0? "In stock":"Not Available"}</span>
         </p>
         <p>
          ID:<span>{id}</span>
         </p>
         <p>
          Brand:<span>{company}</span>
         </p>

         </div>

         <hr/>
         {stock>0 && <AddToCart product={singleproduct} />}

        

        </div>
        </div>
        </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
.container{
  padding: 9rem 0;

}
.product_images{
  display: flex;
    align-items: center;
}
.product_data{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  .product-data-price{
    color: ${({theme})=> theme.colors.btn};
    font-size: 2rem;
  }

.product-data-warranty{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #ccc;
  margin-bottom: 1rem;

  p{
    opacity:0.5 ;
  }



.product-warranty-data{
  text-align: center;
  

  .warranty-icons{
    background-color: rgba(220,220,220,0.5);
    border-radius:50%;
    width: 4rem;
    height: 4rem;
  
  }


  p{
    font-size: 1.4rem;
    padding-top:0.4rem;
  }

}
}
 span{
  font-size:1.3rem;
  margin-left:1rem;
  font-weight:500;
}

hr{
 max-width: 100%;
 width: 90%;
 border: 0.1rem solid #000;

}
}




`;

export default Singleproducts;
