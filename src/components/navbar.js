import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
        return (
          <nav className="navbar">
            <Link to={"/"}>Albumize</Link>
            <div>
              <ul>
                <li>
                  <Link to={"/"}>Albums</Link>
                </li>
                <li>
                  <Link to={"/add"}>Add Album</Link>
                </li>
                <li>
                  <Link to={"/artist"}>Add Artist</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
}