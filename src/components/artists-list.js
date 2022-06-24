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
        <div className='container'>
          <h2 className='text-light mt-3 mb-5'>Logged Artists</h2>
              {
                data.map((artist) => {
                    return (
                        <div className='d-flex gap-5 mb-3'>
                            <h3 key={artist._id} className='text-light'>{artist.artist}</h3>
                            <Link to={`/viewartist/${artist._id}`} className='text-light'><button className='btn text-light border-light border-3'>View</button></Link>
                        </div>
                    )
                })
              }
        </div>
      )
}