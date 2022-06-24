import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
        return (
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to={"/"} className='navbar-brand px-5'>Albumize</Link>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link to={"/"} className='nav-link'>Albums</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/add"} className='nav-link'>Add Album</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/artists"} className='nav-link'>Artists</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/artist"} className='nav-link'>Add Artist</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='container border border-white mt-3'>
              <h2 className='text-center text-light mt-3'>Welcome to the music album database. </h2>
              <h6 className='text-center text-light mt-5'>This application allows the user to keep track of music artists and albums. </h6>
              <h6 className='text-center text-light mb-3'>Use the navigation bar at the top to move around the site.</h6>
            </div>
          </div>
        )
}