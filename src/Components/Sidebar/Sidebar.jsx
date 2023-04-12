import React from 'react'
import "./Sidebar.css"
import { useSidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom"

export const Sidebar = () => {

  const { isSidebarOpen, closeSidebar} = useSidebarContext();
  // console.log(isSidebarOpen)

  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ""}`}>

      <button type='button' className='sidebar-colse-btn nav-btn' onClick={() => closeSidebar()}>
        <i className='fas fa-times'></i>
      </button>

      <Link to="/" className='navbar-brand'>
            <i className="fa-sharp fas fa-bookmark"></i>
            <span>Bloggers</span>
      </Link>

      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className='nav-link'>Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className='nav-link'>About</Link>
        </li>
      </ul>

    </div>
  )
}
