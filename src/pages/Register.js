import React, { useState } from "react";
import "./FormStyles.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/register', { username, password });
            console.log(response.data.message);
            setError('');
        } catch (error) {
            console.error('Error registering: ', error);
            setError('Registration failed');
        }
    };

    return (
        <div className="form">   
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button">Register</button>
                {error && <p>{error}</p>}
                <h4>OR</h4>
                <Link to="/signin">Login</Link>
                <Link to="/AdminSignIn">Admin Login</Link>
            </form>
        </div>
    );
};

export default Register;
