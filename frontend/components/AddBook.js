import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {
    const [book, setBook] = useState({ title: '', author: '', isbn: '', yop: '' });
    const navigate = useNavigate();

    const handleAdd = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/books', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book),
            });

            const message = await res.text();

            if (res.ok) {
                alert(message);
                setBook({ title: '', author: '', isbn: '', yop: '' });
            } else {
                alert(message);
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <form className="container" onSubmit={(e) => { e.preventDefault(); handleAdd(); }} style={{ marginTop: '80px' }}>
            <h3 style={{ textAlign: 'center' }}>Add Book</h3>
            <input
                placeholder="ISBN"
                value={book.isbn}
                onChange={e => setBook({ ...book, isbn: e.target.value })}
                required
            />
            <input
                placeholder="Title"
                value={book.title}
                onChange={e => setBook({ ...book, title: e.target.value })}
                required
            />
            <input
                placeholder="Author"
                value={book.author}
                onChange={e => setBook({ ...book, author: e.target.value })}
                required
            />
            <input
                placeholder="Year"
                value={book.yop}
                onChange={e => setBook({ ...book, yop: e.target.value })}
                required
            />

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="submit">Add</button>
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
