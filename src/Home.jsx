import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Home.css';
import { FaAddressBook, FaBell, FaBookOpen, FaHome, FaPen, FaRegAddressBook, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
export const Home = () => {

  const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick=()=>{
    localStorage.clear();
    navigate('/Login')
  }

  return (
    <>
    <div className='navbar'>
      <button className='toggle-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to='/user'><FaHome/><br />Home</Link></li>
        <li><Link to='Explore'><FaBookOpen/><br />Explore</Link></li>
        <li><Link to='Post'><FaPen/><br />Create post</Link></li>
        <li><Link to='Profile'><FaUserCircle/><br />Profile</Link></li>
        <li><Link to='' ><FaSignOutAlt/><br />Logout</Link></li>

      </ul>
    </div>
      <Outlet/>
    </>
  )
}
