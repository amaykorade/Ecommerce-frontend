import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, logout, selectAuthToken } from '../../features/user/userSlice';
import { selectCurrentUser } from '../../features/user/userSlice';
import { HeaderStyled } from './Header.styled';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(selectCurrentUser);
    const token = useSelector(selectAuthToken);
    console.log(userData)
    // const userInfo = userData.user;
    // console.log(userInfo);
    // console.log(token);

    // const currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log('aa', currentUser.user.name);

    useEffect(() => {
        if (token) {
            dispatch(getCurrentUser());
        }

    }, [dispatch, token]);


    const handleLogout = () => {
        dispatch(logout());
        navigate('/user/login');
    };

    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!isHamburgerOpen);
    }


    return (


        <>
            <HeaderStyled>
                <div className='main'>

                    <div className='navbar'>
                        <div className='left'>
                            <Link to={`/`}> <h3>Logo</h3> </Link>

                            <p> <Link to={`/products`}>Products</Link> </p>
                        </div>
                        <div className='mid'>
                            <p> <Link to={`/`}>Home</Link> </p>
                            <p><Link to={`/about`}>About</Link></p>
                            <p><Link to={`/cart`}>Cart</Link></p>
                            <p><Link to={`/orders`}>Orders</Link></p>
                            <p> <Link to={`/contact`}>Contact</Link> </p>
                        </div>
                        <div className='right'>
                            {token ? (
                                <div className='user'>
                                    {userData && userData.user ? (
                                        <p > {userData.user.name} </p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            ) : (

                                <div>
                                    <Link to='/user/login'><button>Login</button> </Link>
                                    <Link to='user/signup'><button>Sign Up</button>  </Link>
                                </div>
                            )}


                        </div>
                        <button className='hamburger' onClick={toggleHamburger}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>

                </div>
                {isHamburgerOpen && (
                    <div className='nav-links'>
                        <p> <Link to={`/`}>Home</Link> </p>
                        <p> <Link to={`/products`}>Products</Link> </p>
                        <p> <Link to={`/contact`}>Contact</Link> </p>
                        <p><Link to={`/about`}>About</Link></p>
                        <p><Link to={`/cart`}>Cart</Link></p>
                        <p><Link to={`/orders`}>Orders</Link></p>
                        <p> {token ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (

                            <div>
                                <button>Login</button>
                                <button>Sign Up</button>
                            </div>
                        )} </p>
                    </div>
                )}
            </HeaderStyled>
        </>
    );
};

export default Header;
