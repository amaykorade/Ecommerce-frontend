import styled from "styled-components";

export const HeaderStyled = styled.div`

    .main{
        /* border: 1px solid #F5F7F8; */
        /* background-color: #F5F7F8; */
        /* background-color:  rgb(2,2,2); */
        background-color:  rgb(4,31,40);
        color: white;
        position: fixed;
        top: 0;
        width: 100%;
        height: 70px;
        /* background-color: white; */
    }

    .navbar{
        display: flex;
        justify-content: space-around;
        /* border: 1px solid black; */
        align-items: center;
        width: 90%;
        height: 70px;
        margin: 0 auto;
        color: white;
    }
    .left{
        /* border: 1px solid white; */
        display: flex;
        align-items: center;
    }
    .left h3{
        font-size: 1.5rem;
    }
    .left p a{
        /* color: rgb(14, 139, 255); */
        color: red;
        margin-left: 55px;
        text-decoration: none;
        // font-size: 1rem;
        font-weight: 400;
    }
    .mid{
        /* border: 1px solid white; */
        display: flex;
    }
    .mid a{
        /* color: black; */
        color: white;
        text-decoration: none;
    }
    .mid p{
        padding-left: 25px;
    }
    .right{
        display: flex;
    }
    .right button{
        /* border: 1px solid rgb(14, 139, 255); */
        border: 1px solid red;
        /* background-color: rgb(14, 139, 255, 0.15); */
        background-color: rgb(255, 105, 105, 30%);
        width: 100px;
        height: 40px;
        margin-left: 10px;
        border-radius: 15px;
    }
    .user{
            /* position: relative;
            top: 20px; */
            display: flex;
            align-items: center;
        }

    .hamburger{
        display: none;
    }

    .hamburger div{
        width: 20px;
        height: 1px;
        margin: 6px 0;
        border: 1px solid white;
    }

    .nav-links{
        display: none;
        background-color:  rgb(4,31,40);
    }

    @media screen and (max-width: 730px) {
        .navbar{
            width: 90%;
            height: 50px;
            justify-content: space-between;
            margin: 5px auto;
            /* border-bottom: 1px solid rgb(199,197,193, 0.2); */
        }
        .left{
            text-align: left;
        }
        .left p, .mid{
            display: none;
        }
        .mid{
            display: none;
        }
        .right{
            display: none;
        }
      
        .hamburger{
            display: block;
        }
        .right button{
            font-size: 0.8rem;
            width: 70px;
            height: 30px;
        }

       

        .nav-links{
            display: flex;
            flex-direction: column;
            /* position: relative; */
            /* top: 80px; */
            margin-top: 60px;
            text-align: center;
            align-items: center;
        }
        .nav-links p{
            border-bottom: 1px solid rgb(199,197,193, 0.2);
            /* border: 1px solid #c7c5c1; */
            padding: 10px;
            width: 70%;
        }
        .nav-links p a{
            text-decoration: none;
            color: white;
        }
        .nav-links p button{
            color: red;
        }

    }
`