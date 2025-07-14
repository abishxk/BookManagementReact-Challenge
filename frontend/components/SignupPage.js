import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/api/register/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.text();

            if (res.ok) {
                alert(data || 'Signup successful! Please login.');
                setForm({ username: '', password: '', name: '', email: '' });
                navigate('/login');
            } else {
                alert(data || 'Signup failed');
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSignup} className="container">
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="submit">Sign Up</button>
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
