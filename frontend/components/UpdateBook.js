import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateBookPage() {
    const [book, setBook] = useState({ title: '', author: '', isbn: '', yop: '' });
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!book.isbn) {
            alert("ISBN is required to update a book.");
            return;
        }

        const existingRes = await fetch(`http://localhost:8080/api/books/${book.isbn}`);
        if (!existingRes.ok) {
            alert("Book not found with this ISBN.");
            return;
        }
        const existingBook = await existingRes.json();

        const updatedBook = {
            title: book.title || existingBook.title,
            author: book.author || existingBook.author,
            yop: book.yop || existingBook.yop,
            isbn: book.isbn,
        };

        const res = await fetch(`http://localhost:8080/api/books/${book.isbn}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBook),
        });

        if (res.ok) {
            alert('Book updated');
            setBook({ title: '', author: '', isbn: '', yop: '' });
        } else {
            alert('Update failed');
        }
    };

    return (
        <form className="container" onSubmit={handleUpdate} style={{ marginTop: '80px' }}>
            <h3 style={{ textAlign: 'center' }}>Update Book</h3>
            <input
                placeholder="ISBN of Book to be Updated"
                value={book.isbn}
                onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                required
            />
            <input
                placeholder="Title (leave empty to keep unchanged)"
                value={book.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
            <input
                placeholder="Author (leave empty to keep unchanged)"
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
            <input
                placeholder="Year (leave empty to keep unchanged)"
                value={book.yop}
                onChange={(e) => setBook({ ...book, yop: e.target.value })}
            />

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="submit">Update</button>
                <button
                    type="button"
                    onClick={() => navigate('/admin-dashboard')}
                    style={{ backgroundColor: '#6c757d', color: 'white' }}
                >
                    Back
                </button>
            </div>
        </form>
    );
}
