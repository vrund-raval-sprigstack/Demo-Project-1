import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImportImages from '../../ImportImages';
import useApiService from '../../services/ApiServices';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // Added remember me state

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { postAPI } = useApiService();



    const navigate = useNavigate();


    useEffect(() => {
        // Clear all local storage items
        localStorage.clear();
    }, []); // Empty dependency array ensures it runs once when the component mounts

    const handleLogin = async (e) => {


        setIsLoading(true);
        setError(null);

        try {
            // const response = await fetch(
            //     'https://v3api.addresstwo.com/api/Authenticate/Authenticate',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'SuperTokenAuthentication': 'pK1YtiuiSer03Ajn8G+qJmyEBesJ6yj+',
            //         },
            //         body: JSON.stringify({
            //             Username: username,
            //             Password: password,
            //             grecaptcha: '',
            //         }),

            //     }
            // );


            const raw = JSON.stringify({
                Username: username,
                Password: password,
                grecaptcha: '',
            });

            const response = await postAPI(`/Authenticate/Authenticate`, 'supertoken', raw);
            if (response?.Success) {
                localStorage.setItem('Tokenobject', JSON.stringify(response?.Data))
                alert('Login Successful.');
                navigate('/', { replace: true });
            }

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.Message || 'Login failed.');
            // }

            // Parse response JSON
            // const responseData = await response.json();

            // if (responseData.Data && responseData.Data.Token) {
            //     // Save the auth token to localStorage
            //     localStorage.setItem('auth-token', responseData.Data.Token);
            //     alert('Login Successful.');
            //     navigate('/', { replace: true });
            // } else {
            //     throw new Error('Invalid credentials or missing auth token.');
            // }
        } catch (e) {
            setError(e.message); // Set error to display in the UI
        } finally {
            setIsLoading(false); // Reset loading state
        }




    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="row">
                <div className="col d-flex justify-content-center align-item-center">
                    <img
                        src={ImportImages.LoginBigImage}
                        alt="LoginPageImage"
                    />
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="container">
                                    <div className="card-body">

                                        {isLoading && <p>Loading...</p>}
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                        <img
                                            src={ImportImages.Logo}
                                            alt="Logo"
                                            className="d-block mx-auto my-4 login-logo"
                                        />
                                        <h4 className="text-center mb-4 login-card fw-semibold">Login to account</h4>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                handleLogin();
                                            }}
                                        >
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label opacity-75 my-label">
                                                    Username
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        className={`form-control placeholder-light ${username && 'border-end-0'}`}
                                                        placeholder="Enter username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        required
                                                    />
                                                    {username && (
                                                        <span
                                                            className="input-group-text cursor-pointer border-start-0"
                                                            onClick={() => setUsername('')}
                                                        >
                                                            <i className="opacity-50 fa-regular fa-circle-xmark"></i>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label opacity-75 my-label">
                                                    Password
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        id="password"
                                                        className="form-control placeholder-light border-end-0"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <span
                                                        className="input-group-text border-start-0"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <i className={`fas opacity-50 ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Added Remember Me switch */}
                                            <div className="mb-3 form-check form-switch">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input remember-me-switch"
                                                    id="rememberMe"
                                                    checked={rememberMe}
                                                    onClick={(e) => e.target.blur()} // This will remove focus immediately after click
                                                    onChange={(e) => setRememberMe(e.target.checked)}
                                                />
                                                <label className="form-check-label opacity-75" htmlFor="rememberMe">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" className="btn login-button" disabled={isLoading}>
                                                    Login
                                                </button>
                                            </div>
                                            {/* Added Forgot Username/Password links */}
                                            <div className="mt-3 d-flex justify-content-between">
                                                <a href="/forgot-username" className="text-decoration-underline primary-color-text forgot-link-text" >
                                                    Forgot Username?
                                                </a>
                                                <a href="/forgot-password" className="text-decoration-underline primary-color-text forgot-link-text">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            {/* Added support text */}
                                            <div className="mt-3 text-center">
                                                <p className="text-danger" style={{ fontSize: '0.8em' }}>
                                                    *If you face any issues while logging in, please contact us at support@addresstwo.com
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}