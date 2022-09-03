import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    });
  }, []);
  return (
    <header className={`nav ${isBlack && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Profile"
      />
    </header>
  );
}

export default NavBar;
