import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        phoneNumber: '',
        address: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/users/register', formData);
            alert('User registered successfully!');
        } catch (error) {
            console.error(error);
            alert('Error registering user.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#000', // Black background
                margin: 0,
                padding: 0,
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent black background for the form
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '400px',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ color: '#000', fontSize: '24px', marginBottom: '20px' }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
                        }}
                    />
                    <input
                        name="age"
                        placeholder="Age"
                        type="number"
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            marginBottom: '10px',
                            width: '95%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for input fields
                            color: '#333',
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
                            transition: 'background-color 0.3s',
                            width: '100%',
                        }}
                    >
                        Register
                    </button>
                </form>
                <p style={{ marginTop: '10px' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
