import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import { useState } from "react";
import Protected from "./components/Protected";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <Router>
      <NavBar />
      {isLoggedIn ? (
        <button onClick={logOut}>Bahaar jaa</button>
      ) : (
        <button onClick={logIn}>Andar aaja</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Protected isLoggedIn={isLoggedIn}><Profile /></Protected>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;