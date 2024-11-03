import styled from "styled-components";

export const CartStyled = styled.div`

.cart-main{
    /* border: 1px solid black; */
    width: 80%;
    /* height: 100px; */
    margin: 120px auto;
   
}
.items{
    display: grid;
    grid-template-columns: auto auto auto auto;
}

.cart-main h2{
    font-size: 2rem;
    /* font-weight: 600; */
    margin: 120px 0 30px 0;
    border-bottom: 1px solid #DCE1EA;
    padding-bottom: 30px;
    letter-spacing: 1rem;
}

.card{
  border: 1px solid #cacdcf;
  background-color: #F5F7F8;
    max-width: 70%;
    margin: 20px auto;
    border-radius: 10px;
}
img{
  border: 1px solid #cacdcf;
    border-radius: 10px 10px 0 0;
    width: 100%;
    /* height: 300px; */
    /* object-fit: cover; */
    object-fit: contain;
}
.info{
    /* border: 1px solid black; */
    text-align: center;
    margin: 5px 0;
}
.info p{
    margin: 10px auto;
}
.name{
    border-bottom: 1px solid #DCE1EA;
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 10px;
    width: 60%;
    text-align: center;
}

button{
    border: 1px solid  rgb(4,31,40);
    background-color:  rgb(4,31,40);
    color: white;
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 40px;
}

.btn2{
  border-radius: 10px;
}

.cart-total{
    border: 1px solid #DCE1EA;
    border-radius: 10px;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
}

.cart-total p{
    margin: 0 0 0 30px;
    font-size: 1.3rem;
    font-weight: 600;
}

.cart-total button{
    width: 30%;
}

@media screen and (max-width: 1200px) {
  .items{
    grid-template-columns: auto auto auto;
  }
}

@media screen and (max-width: 900px) {
  .items{
    grid-template-columns: auto auto ;
  }
}

@media screen and (max-width: 550px) {
  .items{
    grid-template-columns: auto  ;
  }
}

`