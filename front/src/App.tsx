
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import HomePage from './app/home/HomePage';
import LoginPage from './app/auth/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
