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
        <div className='container'>
            <div className='container border border-light border-4 mt-3'>
              <h2 className='text-center text-light mt-3'>Welcome to the music album database. </h2>
              <h6 className='text-center text-light mt-5'>This application allows the user to keep track of music artists and albums. </h6>
              <h6 className='text-center text-light mb-3'>Use the navigation bar at the top to move around the site.</h6>
            </div>
          <h2 className='text-light mt-3 mb-5'>Logged Albums</h2>
              {
                data.map((album) => {
                    return (
                        <div className='text-center'>
                            <h3 key={album._id} className='text-light mb-3'>{album.artist} - {album.title}</h3>
                            <Link to={`/view/${album._id}`} className='text-light'><button className='btn text-light border-light border-4 mb-5'>View</button></Link>
                        </div>
                    )
                })
              }
        </div>
      )
}