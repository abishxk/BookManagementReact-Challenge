import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const message = await res.text();

            if (message === 'Login successful') {
                navigate('/user-dashboard');
            } else {
                alert(message);
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="submit">Login</button>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    style={{ backgroundColor: '#6c757d', color: 'white' }}
                >
                    Back
                </button>
            </div>
        </form>
    );
}
