import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/homepage2");
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/homepage2");
  };

  return (
    <header className="header">
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #000;
            color: white;
          }

          .header .logo {
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
          }

          .navbar ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
          }

          .navbar ul li a {
            color: white;
            text-decoration: none;
          }

          .header-buttons {
            display: flex;
            gap: 15px;
          }

          .login-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            background-color: #333;
            color: white;
          }

          .login-btn:hover {
            background-color: #555;
          }
        `}
      </style>
      <div className="logo" onClick={handleLogoClick}>WE-LINK</div>
      <nav className="navbar">
        <ul>
          <li><a href="/career-test">Career Test</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/resume">Upload</a></li>
          <li><a href="/degrees">Degrees</a></li>
          <li><a href="/aboutus">About Us</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="login-btn" onClick={handleLoginClick}>Logout</button>
        <button className="login-btn" onClick={handleProfileClick}>Profile</button>
      </div>
    </header>
  );
}

export default Navbar;
