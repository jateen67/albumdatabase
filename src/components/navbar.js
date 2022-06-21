import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
        return (
          <nav className="navbar bg-dark navbar-expand">
            <Link to={"/"} className="navbar-brand">Albumize</Link>
            <div>
              <ul className="navbar-nav">
                <li>
                  <Link to={"/"} className="nav-link">Albums</Link>
                </li>
                <li>
                  <Link to={"/add"} className="nav-link">Add Album</Link>
                </li>
                <li>
                  <Link to={"/artist"} className="nav-link">Add Artist</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
}