import React, {useState, useEffect} from 'react'
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
      .then(res => console.log('deleted album'))
    }

    return ( //same layout as add album
        <div className='container'>
            {
                data.map((album) => {
                    return (
                        <h2 className='text-light mt-3 mb-5' key={album.album_id}>{album.album_title}</h2>
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
                                    <h2 className='text-light mb-3' key={album.album_id}>Title:</h2>
                                    <h3 className='text-light'>{album.album_title}</h3>
                                </div>
                                <div className='col'>
                                    <h2 className='text-light' key={album.album_id}>Artist:</h2>
                                    <h3 className='text-light'>{album.album_artist}</h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-2'></div>
                                <div className='col'>
                                    <h2 className='text-light' key={album.album_id}>Duration:</h2>
                                    <h3 className='text-light'>{album.album_duration} minutes</h3>
                                </div>
                                <div className='col'>
                                    <h2 className='text-light' key={album.album_id}>Date Released:</h2>
                                    <h3 className='text-light'>{album.album_date.substring(0, 10)}</h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-2'></div>
                                <div className='col-8'>
                                    <h2 className='text-light' key={album.album_id}>Description:</h2>
                                    <h3 className='text-light'>{album.album_description}</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-5'></div>
                                <div className='col-1'>
                                    <Link to={`/editalbum/${album.album_id}`} className='text-light'><button className='btn text-light border-light border-4'>Edit</button></Link>
                                </div>
                                <div className='col-2'>
                                    <Link to={'/'} className='text-light'><button className='btn text-danger border-danger border-4' onClick={() => {deleteAlbum(album.album_id)}}>Delete Album</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
              }
        </div>
      )
}