import React, { useState } from 'react';
import "./FormStyles.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminSignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const admin_username = "bobo@gmail.com";
    const admin_password = "Bobo12345";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter username and password');
            return;
        }

        if (username === admin_username && password === admin_password) {
            navigate('/admin');
        } else {
            setError('Invalid username or password. Only Admins can visit this site.');
        }


        // try
        //     const response = await axios.post('http://localhost:3001/login', { username, password });
        //     console.log(response.data.message);
        //     navigate("/AdminApp");
        // } catch (error) {
        //     setError('Invalid username or password');
        // }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='button'>Login</button>
                <Link className='link' to='/register'>Sign Up Here</Link>
            </form>
        </div>
    );
};

export default AdminSignIn;
