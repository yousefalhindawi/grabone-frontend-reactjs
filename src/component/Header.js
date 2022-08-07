
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = ()=> {
return (
    <nav className="navbar navbar-expand-lg d-flex bg-light justify-content-center align-items-center Header">
        <div className="container">

        
  <div className="container d-flex justify-content-between align-items-center">
    <NavLink className="navbar-brand logo" to="/">GrabOne</NavLink>
    <button className="navbar-toggler Nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-location-pin location"></i>
      <span className="dropdown-toggle ">Auckland</span>
    </button>
  </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-location-pin location"></i>
      <span className="">Auckland</span>
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="Action">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="Another">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="Something">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/heart"><i className="fa-solid fa-heart"></i></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/basket"><i className="fa-solid fa-basket-shopping"></i></NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-user"></i>
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="Action">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="Another">Another action</NavLink></li>
            <li><NavLink className="dropdown-item" to="Something">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/envelope"><i className="fa-solid fa-envelope">Subscribe</i></NavLink>
        </li>
      </ul>
    </div>
    </div>
</nav>
    )
};
export default Header;