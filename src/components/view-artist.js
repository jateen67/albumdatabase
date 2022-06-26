import React, {useState, useEffect} from 'react'
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
            window.location = '/artists'
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

      return (
        <div className='container'>
            {
                data.map((artist) => {
                    return (
                        <h2 className='text-light mt-3 mb-5' key={artist._id}>{artist.artist}</h2>
                    )
                })
            }
            {
                albums.map((album) => {
                    return (
                      <div className='text-center'>
                        <h3 key={album._id} className='text-light mb-3'>{album.title}</h3>
                        <Link to={`/view/${album._id}`} className='text-light'><button className='btn text-light border-light border-4 mb-5'>View</button></Link>
                      </div>
                    )
                })
              }
              {
                data.map((artist) => {
                  viewArtistsAlbums(artist.artist)
                    return (
                        <div className='text-center'>
                          <button className='btn text-danger border-danger border-4' onClick={() => {deleteArtist(artist._id, artist.artist)}}>Delete Artist</button>
                        </div>                        
                    )
                })
              }
        </div>
      )
}