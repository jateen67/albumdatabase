import React, {useState, useEffect, Component} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

export default function AlbumsList() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/artists')
        .then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
          <h3>Logged Artists</h3>
              {
                data.map((artist) => {
                    return (
                            <p key={artist._id}><Link to={`/viewartist/${artist._id}`}>{artist.artist}</Link></p>
                    )
                })
              }
        </div>
      )
}