import React, {useState, useEffect, Component} from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios'

export default function AlbumsList() {
    const [data, setData] = useState([])
    const [albums, setAlbums] = useState([])
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
          axios.delete(`http://localhost:5000/artists/${id}`)
          .then(res => console.log(res.data))
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
            window.location = '/'
        })
      }

      const viewArtistsAlbums = (name) => {
        let matches = []
        axios.get('http://localhost:5000/albums')
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].artist == name) {
              matches.push(res.data[i])
              setAlbums(matches)
            }
          }
        })
      }

      const p = () => {
        console.log(albums)
      }

      return (
        <div>
          <button onClick={p}>asa</button>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
            {
                data.map((artist) => {
                  viewArtistsAlbums(artist.artist)
                    return (
                        <tr key={artist._id}>
                            <td>{artist.artist}</td>
                            <td><a href='#' onClick={() => {deleteArtist(artist._id, artist.artist)}}>Delete</a></td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Artist Albums</th>
              </tr>
            </thead>
            <tbody>
            {
                albums.map((album) => {
                    return (
                        <tr key={album._id}>
                            <td>{album.title}</td>
                            <td>{album.artist}</td>
                            <td>{album.description}</td>
                            <td>{album.duration}</td>
                            <td>{album.date}</td>
                            <td><Link to={"/view/"+album._id}>view</Link></td>
                        </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      )
}