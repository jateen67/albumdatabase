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
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      )
}