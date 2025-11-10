import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="d-flex flex-column min-vh-100">

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={!user ? <LogIn /> : <Navigate to="/Dashboard" />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to="/Dashboard" />} />
          <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
