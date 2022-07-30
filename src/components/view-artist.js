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

    const deleteArtist = (artist_id, artist_name) => {
      axios.delete(`http://localhost:5000/artists/${artist_id}`)
      .then(res => console.log('deleted artist'))

      axios.get('http://localhost:5000/albums')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].album_artist == artist_name) {
            axios.delete(`http://localhost:5000/albums/${res.data[i].album_id}`)
            .then(res => console.log('deleted album after deleting artist'))
          }
        }
      })
      window.location = '/artists'
    }

    const viewArtistsAlbums = (name) => {
      let matches = []
      axios.get('http://localhost:5000/albums')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].album_artist == name) {
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
                    <h2 className='text-light mt-3 mb-5' key={artist.artist_id}>{artist.artist_name}</h2>
                )
            })
        }
        {
            albums.map((album) => {
                return (
                  <div className='text-center'>
                    <h3 key={album.album_id} className='text-light mb-3'>{album.album_title}</h3>
                    <Link to={`/viewalbum/${album.album_id}`} className='text-light'><button className='btn text-light border-light border-4 mb-5'>View</button></Link>
                  </div>
                )
            })
          }
          {
            data.map((artist) => {
              viewArtistsAlbums(artist.artist_name)
                return (
                    <div className='text-center'>
                      <button className='btn text-danger border-danger border-4' onClick={() => {deleteArtist(artist.artist_id, artist.artist_name)}}>Delete Artist</button>
                    </div>                        
                )
            })
          }
      </div>
    )
}