import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteBookPage() {
    const [isbn, setIsbn] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8080/api/books/${isbn}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            alert('Book deleted');
            setIsbn('');
        } else {
            alert('Delete failed');
        }
    };

    return (
        <div className="container">
            <h3>Delete Book</h3>
            <input
                placeholder="ISBN to delete"
                value={isbn}
                onChange={e => setIsbn(e.target.value)}
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={handleDelete}>Delete</button>
                <button
                    type="button"
                    onClick={() => navigate('/admin-dashboard')}
                    style={{ backgroundColor: '#6c757d', color: 'white' }}
                >
                    Back
                </button>
            </div>
        </div>
    );
}
