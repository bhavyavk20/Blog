import React from "react";
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div className='home'>
    <li><b><Link to='/'>HOME</Link></b></li>
      <li><b><Link to='/About'>ABOUT</Link></b></li>
      <li><b><Link to='/Login'>LOGIN</Link></b></li>
      <li><b><Link to='/Reg'>SIGN UP</Link></b></li>
    </div>
    <Outlet/>
    </>
  
  );
}

export default App;