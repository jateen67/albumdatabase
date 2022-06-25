import React, {useState, useEffect, Component} from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios'

export default function AlbumsList() {
    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/albums/${params.id}`)
        .then(res => {
            setData(old => [...old, res.data])
        })
        
    }, [])

    const deleteAlbum = (id) => {
      axios.delete(`http://localhost:5000/albums/${id}`)
      .then(res => console.log(res.data))

      setData(data.filter(album => album._id !== id))
      window.location = '/'
    }

    return ( //same layout as add album
        <div className='container'>
            {
                data.map((album) => {
                    return (
                        <h2 className='text-light mt-3 mb-5' key={album._id}>{album.title}</h2>
                    )
                })
            }
            
            {
                data.map((album) => {
                    return (
                        <div className='container'>
                            <div className='row mb-5'>
                                <div className='col-2'></div>
                                <div className='col'>
                                    <h2 className='text-light mb-3' key={album._id}>Title:</h2>
                                    <h3 className='text-light'>{album.title}</h3>
                                </div>
                                <div className='col'>
                                    <h2 className='text-light' key={album._id}>Artist:</h2>
                                    <h3 className='text-light'>{album.artist}</h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-2'></div>
                                <div className='col'>
                                    <h2 className='text-light' key={album._id}>Duration:</h2>
                                    <h3 className='text-light'>{album.duration} minutes</h3>
                                </div>
                                <div className='col'>
                                    <h2 className='text-light' key={album._id}>Date Released:</h2>
                                    <h3 className='text-light'>{Date(album.date * 1000).substring(4, 15)}</h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-2'></div>
                                <div className='col-6'>
                                    <h3 className='text-light' key={album._id}>Description: {album.description}</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-5'></div>
                                <div className='col-1'>
                                    <Link to={`/edit/${album._id}`} className='text-light'><button className='btn text-light border-light border-4'>Edit</button></Link>
                                </div>
                                <div className='col-2'>
                                    <Link to={'/'} className='text-light'><button className='btn text-danger border-danger border-4' onClick={() => {deleteAlbum(album._id)}}>Delete Album</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
              }
        </div>
      )
}