import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// components
import NavBar from './components/NavBar';

// pages
import Home from "./pages/Home";
import Footer from './components/Footer';



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* open routes */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/LogIn' element={<Home />} />
          <Route path='/register' element={<Home />} />

          {/* protected routes */}
          <Route path='/dashboard' element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
