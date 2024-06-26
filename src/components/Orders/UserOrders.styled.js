import styled from "styled-components";

export const UserOrderStyled = styled.div`

.orders{
    /* border: 1px solid black; */
    width: 100%;
    /* height: 100vh; */
    margin: 120px 0;
}

.orders h2{
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1rem;
    margin: 50px 0;
}

.main{
    /* border: 1px solid red; */
    width: 80%;
    margin: 0 auto;
}

.card{
    border: 1px solid #cacdcf;
    border-radius: 10px;
    background-color: #F5F7F8;
    width: 100%;
    /* height: 220px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.card img{
    /* border: 1px solid black; */
    border-radius: 10px 0 0 10px;
    width: 20%;
    height: 300px;
    object-fit: cover;
}

.info{
    /* border: 1px solid black; */
    width: 76%;
    /* height: 220px; */
    display: flex;
    justify-content: space-between;
}

.info-product{
    /* border: 1px solid black; */
    width: 49%;
    /* height: 220px; */
    padding: 20px 25px;
}

.info-user{
    /* border: 1px solid black; */
    width: 49%;
    /* height: 220px; */
    padding: 20px 25px;
}

.info-product h3{
    font-weight: 600;
    margin: 10px 0;
}

.info-product p{
    margin: 10px 0;
    font-weight: 600;
}
.info-user p{
    margin: 10px 0;
    font-weight: 600;
}

.info-user p span{
    margin-left: 20px;
    font-weight: 400;
}


`;