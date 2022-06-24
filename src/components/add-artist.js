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
        <div className='container'>
            <h2 className='text-light mt-3 mb-5'>Add New Artist</h2>
            <form onSubmit={addArtistClicked}>
                <div className='row mb-3'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <label className='text-light'>Artist: </label>
                        <input className='form-control' value={artist} onChange={changeArtist} required></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5'></div>
                    <button className='btn col-2 text-light border-light border-3 mt-3' type='submit'>Add Artist</button>
                </div>
            </form>
        </div>
    )
}