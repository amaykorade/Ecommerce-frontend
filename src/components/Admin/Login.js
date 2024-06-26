import React, { act, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectAuthStatus, selectAuthToken } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { SignInStyled } from './Auth.styled';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthStatus);
    const token = useSelector(selectAuthToken);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password })).then((action) => {
            localStorage.setItem("token", action.payload.token);
            navigate('/');
        });
    };

    // useEffect(() => {
    //     if (token) {
    //         navigate('/')
    //     }
    // }, [token, navigate]);

    return (
        <SignInStyled>
            <div className='login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <label>Email</label> */}
                        <input
                            className='input'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='@gmail.com'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>Password</label> */}
                        <input
                            className='input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='password'
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    {status === 'loading' && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </form>
            </div>
        </SignInStyled>
    )
}

export default Login