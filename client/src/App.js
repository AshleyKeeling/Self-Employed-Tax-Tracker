import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Register from './pages/Register';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* open routes */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/register' element={<Register />} />

          {/* protected routes */}
          <Route path='/dashboard' element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
