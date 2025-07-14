import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBookPage() {
    const [isbn, setIsbn] = useState('');
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/books/${isbn}`);
            const data = await res.json();

            if (res.ok && data && data.title) {
                setBook(data);
            } else {
                alert(`Book with ISBN "${isbn}" not found`);
                setBook(null);
            }
        } catch (err) {
            alert(`Book with ISBN "${isbn}" doesn't exist`);
            setBook(null);
        }
    };



    return (
        <div className="container">
            <h3>Search Book by ISBN</h3>
            <input
                placeholder="ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={handleSearch}>Search</button>
                <button
                    type="button"
                    onClick={() => navigate('/admin-dashboard')}
                    style={{ backgroundColor: '#6c757d', color: 'white' }}
                >
                    Back
                </button>
            </div>

            {book && (
                <div style={{ marginTop: '20px' }}>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Year:</strong> {book.yop}</p>
                </div>
            )}
        </div>
    );
}
