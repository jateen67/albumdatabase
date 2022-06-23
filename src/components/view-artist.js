import React, {useState, useEffect, Component} from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios'

export default function AlbumsList() {
    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/artists/${params.id}`)
        .then(res => {
            setData(old => [...old, res.data])
        })
        
    }, [])

    const deleteArtist = (id, artist) => {
        axios.get('http://localhost:5000/albums')
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].artist == artist) {
                    console.log('match made')
                    axios.delete(`http://localhost:5000/albums/${res.data[i]._id}`)
                    .then(res => console.log(res.data))
                    axios.delete(`http://localhost:5000/artists/${id}`)
                    .then(res => console.log(res.data))
                    setData(data.filter(artist => artist._id !== id))
                }
            }
        })
      }

      return (
        <div>
            {
                data.map((artist) => {
                    return (
                        <h3 key={artist._id}>{artist.title}</h3>
                    )
                })
            }
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
            {
                data.map((artist) => {
                    return (
                        <tr key={artist._id}>
                            <td>{artist.artist}</td>
                            <td><Link to={"/edit/"+artist._id}>edit</Link></td>
                            <td><a href='#' onClick={() => {deleteArtist(artist._id, artist.artist)}}>Delete</a></td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      )
}