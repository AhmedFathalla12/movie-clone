import "./Navbar.css";
import logo from "../../assets/movie-app (2).png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    if (!navRef.current) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className=" navbar" ref={navRef}>
      <div className="navbar-left">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar_profile">
          <img src={profile_icon} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <Link to="/Login" style={{ color: "white" }}>
              <p>Sign Out Of MovieApp</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
