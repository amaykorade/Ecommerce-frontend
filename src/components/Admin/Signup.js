// client/src/components/Signup.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, selectAuthStatus, selectAuthError } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser({ email, password, name }));
    };

    useEffect(() => {
        if (status === 'succeedded') {
            navigate('/product')
        }
    })

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
