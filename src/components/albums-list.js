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
          <h2 className='text-light mt-3 mb-5'>Logged Albums</h2>
              {
                data.map((album) => {
                    return (
                        <div className='d-flex gap-5'>
                            <h3 key={album._id} className='text-light'>{album.title}</h3>
                            <Link to={`/view/${album._id}`} className='text-light'><button className='btn text-light border-light border-3'>View</button></Link>
                        </div>
                    )
                })
              }
        </div>
      )
}