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

    return (
        <div>
            {
                data.map((album) => {
                    return (
                        <h3 key={album._id}>{album.title}</h3>
                    )
                })
            }
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
                data.map((album) => {
                    return (
                        <tr key={album._id}>
                            <td>{album.title}</td>
                            <td>{album.artist}</td>
                            <td>{album.description}</td>
                            <td>{album.duration}</td>
                            <td>{Date(album.date * 1000).substring(4, 15)}</td>
                            <td><Link to={"/edit/"+album._id}>edit</Link></td>
                            <td><a href='#' onClick={() => {deleteAlbum(album._id)}}>Delete</a></td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      )
}