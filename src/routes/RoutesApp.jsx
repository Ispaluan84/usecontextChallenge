import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import { ThemeContext } from '../themes/ThemeContext';

const RoutesApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/myjob">MyJob</Link>
      </nav>
      <section className={`App ${theme}`}>  {/* aplica el tema a todo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </section>
    </Router>
  );
};

export default RoutesApp;
