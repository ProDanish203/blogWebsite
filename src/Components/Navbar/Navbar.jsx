import React, { useEffect }  from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { searchIcon } from "../../utils/images";
import { useSidebarContext } from "../../context/sidebarContext";


export const Navbar = () => {

  const { openSidebar } = useSidebarContext();
  // console.log(openSidebar)

  return (
    <nav className='navbar'>
      
      <div className="container w-100">

        <div className="navbar-content">

          <div className="brand-and-toggler">

            <Link to="/" className='navbar-brand'>
            <i className="fa-sharp fas fa-bookmark"></i>
            <span>Bloggers</span>
            </Link>

          </div>

          <div className="navbar-links">

              <ul className="nav-links">
                <li className='nav-item'>
                  <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className='nav-link'>Blog</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className='nav-link'>About</Link>
                </li>
              </ul>

              <div className="vertical-line"></div>

              <button type='button' className='nav-btn nav-search-btn'>
                <img src={searchIcon}/>
              </button>
              <button type='button' className='nav-btn sidebar-show-btn' onClick={() => openSidebar()}>
                <i className='fas fa-bars'></i>
              </button>

          </div>

        </div>      

      </div>

    </nav>
  )
}
