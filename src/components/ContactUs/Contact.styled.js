import styled from "styled-components";


export const ContactStled = styled.div`

.contact-us{
    /* border: 1px solid black; */
    width: 100%;
    /* height: 80vh; */
    margin: 120px 0;
}
.contact-us h3{
    font-size: 2rem;
    text-align: center;
    margin: 30px 0;
    letter-spacing: 1rem;
}

.main{
    /* border: 1px solid red; */
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.left{
    /* border: 1px solid black; */
    width: 40%;
    margin: 60px 0;
}
.left h5{
    font-size: 1.5rem;
    padding-left: 50px;
    margin: 20px 0;
    letter-spacing: 1rem;
}
.left p{
    padding: 10px 0 10px 50px;
    margin: 20px 0;
}
.left .add{
    font-size: 1.1rem;
}

.contact-info{
    /* border: 1px solid black; */
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 50px;
}
.contact-info p{
    padding: 0 0 0 15px;
}

.contact-info img{
    width: 13%;
}

.right{
    /* border: 1px solid black; */
    width: 40%;
    margin: 40px 0 0 0 ; 
}
.right iframe{
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1050px) {
    .left{
        width: 50%;
    }
}

@media screen and (max-width: 850px) {
    .main{
        flex-direction: column;
        margin: -50px 50px;
    }

    .contact-info{
    margin-left: 0;
}
    
    .left{
        width: 90%;
    }
    .left h5{
        padding-left:  0;
    }
    .left p{
        padding-left: 0;
    }
    .right{
        width: 100%;
        margin: -20px -20px;
    }
    .right iframe{
        width: 90%;
        margin: 0 auto;
    }
}


`