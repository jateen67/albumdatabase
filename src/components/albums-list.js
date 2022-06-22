import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function AlbumsList() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/albums')
        .then(res => {
            if (res.data) setAlbums(res.data)
        })
    })


    return (
        <div>
            <p>you are on the albums list component</p>
        </div>
    )
}