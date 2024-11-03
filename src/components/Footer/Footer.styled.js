import styled from "styled-components";


export const FooterStyled = styled.div`

    .footer{
        /* border: 1px solid red; */
        /* border: 1px solid black; */
        border: 1px solid rgb(4,31,40);
        /* background-color: #F5F7F8; */
        background-color: rgb(4,31,40);
        width: 100%;
        color: white;
        /* z-index: 100; */
    }

    .footer-sec{
        /* border: 1px solid green; */
        width: 90%;
        margin: 30px auto;
        /* height: 50vh; */
        position: relative;
        bottom: 0;
        display: flex;
    }

    #left{
        /* border: 1px solid red; */
        width: 30%;
        /* height: 40vh; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        border-right: 1px solid #545454;
        /* padding-right: 10px; */
    }
    #left h4{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .contact{
        /* border: 1px solid white; */
        width: 50%;
        margin: 20px 0 0 0;
    }
    .contact-info{
        /* border: 1px solid white; */
        width: 100%;
        display: flex;
        align-items: center;
       /* justify-content: ce; */
        margin: 5px 0;

    }
    .contact-info p{
        /* margin: 10px 0 0 15px; */
    }

    .contact-info img{
        width: 15%;
    }

    #middle{
        /* border: 1px solid red; */
        width: 40%;
        /* height: 40vh; */
        /* margin: 10px auto; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        border-right: 1px solid #545454;
    }
    .cards{
        display: flex;
    }

    .cards img{
        width: 20%;
        margin: 0px auto;
    }

    .media{
        display: flex;
        width: 50%;
        margin: 20px 0 0 0;
    }
    .media img{
        margin: 0 auto  ;
        width: 35%;
    }

    #right{
        /* border: 1px solid red; */
        width: 30%;
        /* height: 40vh; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #right p{
        font-size: 1.2rem;
        margin: 10px 0 0 0;
        font-size: 1.2rem;
        font-weight: 600;
    }
    #right ul li{
        margin: 10px 0;
    }
    .footer p{
        text-align: center;
        padding-bottom: 20px;
    }

    .footer-info{
        /* border: 1px solid white; */
        width: 80%;
        margin: 1px 0;
    }
    .footer-info p{
        text-align: left;
        font-weight: 400;
    }

    @media screen and (max-width: 650px) {

        .footer{
            width: 100%;
        }

        #left{
            width: 100%;
        }
        #middle{
            /* margin: 20px 0 0 0; */
            width: 100%;
        }
        .cards img{
            width: 15%;
            margin: 20px auto 0 auto;
        }
        #right{
            width: 100%;
            display: flex;
            flex-direction: column;
  
        }
        #right ul{
            display: flex;
            flex-direction: column;
        }
        #right ul li{
            margin: 5px 20px 5px 20px;
        }
        .footer-sec{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`