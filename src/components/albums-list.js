import React, {useState, useEffect, Component} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

export default function AlbumsList() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/albums')
        .then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
          <h3>Logged Albums</h3>
              {
                data.map((album) => {
                    return (
                            <p key={album._id}><Link to={`/view/${album._id}`}>{album.title}</Link></p>
                    )
                })
              }
        </div>
      )
}