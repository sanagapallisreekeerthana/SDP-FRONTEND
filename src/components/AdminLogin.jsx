import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/adminlogin', credentials);
            if (response.data.success) {
                alert('Login successful!');
                navigate('/admin-dashboard'); // Redirect to Admin Dashboard on successful login
            } else {
                alert(response.data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/adminregister');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#000', // Black background for the page
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '400px',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        style={{
                            display: 'block',
                            width: '95%',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '14px',
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        style={{
                            display: 'block',
                            width: '95%',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '14px',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginTop: '10px',
                            width: '100%',
                        }}
                    >
                        Login
                    </button>
                </form>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '14px', color: '#333' }}>
                        Don't have an account?{' '}
                        <span
                            style={{
                                color: '#007bff',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
                            onClick={handleRegisterClick}
                        >
                            Register here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
