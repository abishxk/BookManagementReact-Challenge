import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Hexa Library</h1>
            <p></p>

            <div className="button-group">
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </div>
    );
}
