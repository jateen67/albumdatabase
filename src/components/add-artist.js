import React, {useState} from 'react'
import axios from 'axios'

export default function AddArtist() {
        //all the state based on hte album model
        const [artist, setArtist] = useState('')
        //state purely for this component
    
        const changeArtist = (e) => {
            setArtist(e.target.value)
        }
        const addArtistClicked = (e) => {
            e.preventDefault()
            const artistAdded = {artist}
            axios.post('http://localhost:5000/artists/add', artistAdded)
            .then(res => console.log(res.data))
            setArtist('')
        }

    return (
        <div>
            <h3>Add New Artist</h3>
            <form onSubmit={addArtistClicked}>
                <div className='form-group'>
                    <label>Artist Name: </label>
                    <input className='form-control' value={artist} onChange={changeArtist} required></input>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>Add Artist</button>
                </div>
            </form>
        </div>
    )
}