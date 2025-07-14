import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";
import ViewBooks from "./components/ViewBooks";
import SearchBook from "./components/SearchBook";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/update-book" element={<UpdateBook />} />
            <Route path="/delete-book" element={<DeleteBook />} />
            <Route path="/view-books" element={<ViewBooks />} />
            <Route path="/search-book" element={<SearchBook />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
