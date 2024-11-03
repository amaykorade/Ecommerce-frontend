// client/src/components/Signup.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, selectAuthStatus, selectAuthError } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { SignUpStyled } from './Auth.styled';
// import { register } from '../../features/user/userSlice';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');


    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("register", name, email, password);
        dispatch(signupUser({
            email,
            password,
            name: name.toUpperCase(),
            number,
            address,
            state: state.toUpperCase(),
            country: state.toUpperCase(),
            city: city.toUpperCase(),
            pincode
        }));
    };

    useEffect(() => {
        if (status === 'succeedded') {
            navigate('/product')
        }
    }, [status, navigate]);

    return (
        <SignUpStyled>
            <div className='signup'>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <label>Name</label> */}
                        <input
                            className='input'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            autoFocus
                            required
                        />
                    </div>
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
                    <div>
                        {/* <label>Phone_no</label> */}
                        <input
                            className='input'
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Phone no'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>address</label> */}
                        <input
                            className='input'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Address'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>country</label> */}
                        <input
                            className='input'
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder='Country'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>state</label> */}
                        <input
                            className='input'
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder='State'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>City</label> */}
                        <input
                            className='input'
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                            required
                        />
                    </div>
                    <div>
                        {/* <label>pin_code</label> */}
                        <input
                            className='input'
                            type="number"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            placeholder='Pin code'
                            required
                        />
                    </div>
                    <button type="submit">Signup</button>
                    {status === 'loading' && <p>Loading...</p>}
                    {error && <p>{typeof error === 'object' ? JSON.stringify(error) : error}</p>}
                </form>
            </div>
        </SignUpStyled>
    );
};

export default Signup;
