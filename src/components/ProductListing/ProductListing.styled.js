import styled from "styled-components";

export const ProductListStyled = styled.div`


.products-main{
    /* border: 1px solid black; */
    width: 90%;
    /* position: relative; */
    margin: 150px auto;
    /* top: 150px; */
}

.filter-section{
    /* border: 1px solid black;  */
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* position: fixed; */
}

.filter-group{
    border: 1px solid black;
    background-color: rgb(4,31,40);
    width: 28%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    padding: 10px 15px;
    border-radius: 10px;
}

.filter-group label{
    font-weight: 600;
    color: white;
    /* margin-left: 10px; */
}
.filter-group select{
    /* border: 1px solid red; */
    width: 60%;
    border-radius: 10px;
    padding: 5px 10px;
}

.filter-group input{
    width: 40%;
    border-radius: 10px;
    padding: 5px 10px;
}

.btn{
    border: 1px solid rgb(4,31,40);
    background-color: rgb(4,31,40);
    color: white;
    border-radius: 10px;
    width: 10%;
}

.products-main h2{
    font-size: 2rem;
    /* font-weight: 600; */
    margin: 50px 0 0 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(4,31,40, 0.2);
    letter-spacing: 1rem;
}

.product-list{
    /* border: 1px solid rgb(199,197,193); */
    border-radius: 10px;
    width: 100%;
    margin: 20px auto;
    display: grid;
    /* display: flex; */
    grid-template-columns: auto auto auto auto;
}

@media screen and (max-width: 1150px) {
    .product-list{
        grid-template-columns: auto auto auto;
    }
}

@media screen and (max-width: 800px) {
    .product-list{
        grid-template-columns: auto auto ;
    }
}

@media screen and (max-width: 600px) {
    .product-list{
        grid-template-columns: auto  ;
    }
}
`