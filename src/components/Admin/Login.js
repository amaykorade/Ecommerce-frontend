import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectAuthStatus, selectAuthToken } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';



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
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        if (token) {
            navigate('/cart')
        }
    }, [token, navigate]);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login