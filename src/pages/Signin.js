import React, { useState } from 'react';
import "./FormStyles.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            console.log(response.data.message);
            navigate("/");
        } catch (error) {
            console.error('Error logging in: ', error);
        }
    };
    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' className='form-control rounded-0' onChange={(event) => setUsername(event.target.value)}/>

                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' className='form-control rounded-0' onChange={(event) => setPassword(event.target.value)} />

                <button type='submit' className='button'>Sign In</button>

                <Link className='link' to='/register'>Sign Up Here</Link>
            </form>

        </div>



    );
}

export default SignIn;
