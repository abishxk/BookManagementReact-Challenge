import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <h2>Admin Dashboard</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        maxWidth: '300px',
                        margin: '20px auto',
                    }}
                >
                    <button onClick={() => navigate('/add-book')}>Add Book</button>
                    <button onClick={() => navigate('/update-book')}>Update Book</button>
                    <button onClick={() => navigate('/delete-book')}>Delete Book</button>
                    <button onClick={() => navigate('/view-books')}>View All Books</button>
                    <button onClick={() => navigate('/search-book')}>Search Book by ISBN</button>
                </div>
            </div>
        </>
    );
}
