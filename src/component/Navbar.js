import './Navbar.css';
import {NavLink} from "react-router-dom";
const Navbar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg Nav container-fluid">
  <div className='container'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle Navbar" to="/Categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Browse Categories
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Action">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Anotheraction">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/Something">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link Navbar" aria-current="page" to="/New">What's New</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link Navbar" to="/Trending">Trending</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link Navbar" to="/You">For You</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link Navbar" to="/Shop">Shop Products</NavLink>
        </li>
        
      </ul>
      <form className="" style={{width: '30%'}} role="search">
        <input className="form-control" type="search" placeholder="&#8981; Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;