import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewBooksPage() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <h3>All Books</h3>
            {books.length === 0 ? (
                <p>No books found.</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book.isbn}>
                            <strong>{book.title}</strong> by {book.author} ({book.yop}) - ISBN: {book.isbn}
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => navigate('/admin-dashboard')} style={{ marginTop: '10px' }}>
                Back
            </button>
        </div>
    );
}
