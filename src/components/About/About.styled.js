import styled from "styled-components";

export const AboutStyled = styled.div`

    .about{
        border: 1px solid rgb(4,31,40);
        width: 100%;
        /* height: 80vh; */
        margin: 70px 0 0 0;
    }

    .main{
        /* border: 1px solid black; */
        width: 80%;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .about h2{
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1rem;
        margin: 40px 0;
    }

    #one{
        border-bottom: 1px solid ;
        padding-bottom: 50px;
    }

    .cont h5{
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        margin: 0 0 15px 0;
    }
    .cont p{
        margin-top: 20px;
    }

    #two{
        margin: 50px 0 0 0;
        border-bottom: 1px solid ;
        padding-bottom: 50px;
    }


    #three{
        margin: 50px 0 0 0;
    }
    #three h5{
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
    }

    #three .rules{
        /* border: 1px solid black; */
        width: 90%;
        margin: 20px auto;
    }
    .rules li{
        margin: 15px 0;
    }
`