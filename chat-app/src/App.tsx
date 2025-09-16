import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ChatMain } from './components/ChatMain_v3';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Navigate to="/chat" /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/login" 
          element={
            <Login onLoginSuccess={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/register" 
          element={
            <Register onRegisterSuccess={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/chat" 
          element={
            isAuthenticated ? <ChatMain /> : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App
