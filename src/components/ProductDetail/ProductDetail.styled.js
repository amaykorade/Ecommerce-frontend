import styled from "styled-components";

export const ProductdetailStyled = styled.div`

.product{
    /* border: 1px solid black; */
    width: 80%;
    /* height: 80vh; */
    margin: 150px auto;
    display: flex;
    justify-content: space-between;
}

img{
    /* border: 1px solid black; */
    border-radius: 10px;
    width: 30%;
    height: 60%;
    object-fit: cover;
}

.info{
    /* border: 1px solid black; */
    width: 60%;
    padding: 20px;
}

h4{
    font-size: 2rem;
    font-weight: 600;
}

#desc{
    margin: 20px 0;
}

.cat-comp{
    margin: 20px 0;
}
.cat-comp p{
    font-size: 1.3rem;
    font-weight: 400;
    margin: 10px 0;
}

.pricing{
    border-top: 1px solid #DCE1EA;
    padding-top: 20px;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 600;
    align-items: center;
}

.pricing p{
    font-size: 1.6rem;
}

.pricing button{
    border: 1px solid rgb(4,31,40);
    background-color: rgb(4,31,40);
    color: white;
    border-radius: 10px;
    width: 30%;
    height: 50px;
}

@media screen and (max-width: 1000px) {
  
    .pricing{
        font-size: 1rem;
    }
    .pricing button{
        width: 25%;
        height: 40px;
    }
    .pricing p{
        font-size: 1.4rem;
    }

    img{
        width: 35%;
        height: ;
    }
}

@media screen and (max-width: 870px) {
    .pricing{
        flex-direction: column;
        align-items: start;
    }
    .pricing button{
        margin: 10px 0;
        width: 150px;
    }

    .info{
        margin: 0 0 0 40px;
    }

    img{
        width: 250px;
    }
}

@media screen and (max-width: 870px) {
    .product{
        flex-direction: column;
        align-items: center;
    }
}

`