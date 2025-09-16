import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { ChatMain } from './components/ChatMain_v2'

function App() {
  // Temporariamente definindo como true para desenvolvimento
  const isAuthenticated = true;

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
          element={<Login />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        <Route 
          path="/chat" 
          element={<ChatMain />} 
        />
      </Routes>
    </Router>
  );
}

export default App
