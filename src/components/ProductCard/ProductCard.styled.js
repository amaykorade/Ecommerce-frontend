import styled from "styled-components";

export const ProductCardStyled = styled.div`

.card{
    /* border: 1px solid #DCE1EA; */
    /* border: 1px solid rgb(4,31,40); */
    /* background-color: rgb(4,31,40, 0.2); */
    border: 1px solid #cacdcf;
    background-color: #F5F7F8;
    width: 80%;
    margin: 20px auto;
    border-radius: 10px;
    padding: 0;
}

/* .card .img{
    width: 100%;
    height: 300px;
    overflow: hidden;
} */

img{
    /* border: 1px solid rgb(4,31,40); */
    border-radius: 10px 10px 0 0;
    width: 100%;
    /* height: 220px; */
    height: 300px;
    margin: 0 auto;
    object-fit: cover;
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
    padding-bottom: 10px;
    width: 60%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
}

.btn1{
    /* border: 1px solid rgb(4,31,40); */
    border: 1px solid #cacdcf;
    padding: 10px 0;
}
.btn2{
    border: 1px solid rgb(4,31,40);
    border-radius: 0 0 10px 10px;
    /* background-color: rgb(255, 105, 105, 30%); */
    background-color: rgb(4,31,40);
    color: white;
    padding: 15px 0;
}

button{
    /* border: 1px solid #DCE1EA; */
    /* border-radius: 10px; */
    width: 100%;
    /* height: 40px; */
}

@media screen and (max-width: 1500px) {
  
}
`