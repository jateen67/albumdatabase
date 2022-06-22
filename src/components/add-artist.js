import React, {useState} from 'react'

export default function AddArtist() {
        //all the state based on hte album model
        const [artist, setArtist] = useState('')
        //state purely for this component
        const [artists, setArtists] = useState([])
    
        const changeArtist = (e) => {
            setArtist(e.target.value)
        }
        const addArtistClicked = (e) => {
            e.preventDefault()
            const artistAdded = {artist}
            console.log(artistAdded)
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