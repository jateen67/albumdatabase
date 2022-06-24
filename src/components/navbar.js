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
          </div>
        )
}